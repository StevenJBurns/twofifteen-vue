import { IVenueRepository } from '@src/core/application/interfaces/IVenueRepository';
import { IUseCase } from '@src/core/application/interfaces/IUseCase';
import { IFilters } from '@src/core/application/interfaces/IFilters';
import { ISorting } from '@src/core/application/interfaces/ISorting';
import { VenueViewModel } from '@src/core/application/viewmodels/VenueViewModel';

export class VenueList implements IUseCase, IFilters, ISorting {
  #filters: Array<string>;
  #sorting: Array<string>;

  constructor(private readonly venueRepository: IVenueRepository) {
    this.#filters = [];
    this.#sorting = [];
  }

  get filters() {
    return this.#filters;
  }

  get sorting() {
    return this.#sorting;
  }

  execute(): VenueViewModel[] {
    return this.venueRepository.getAll().map(VenueViewModel.create);
  }
}
