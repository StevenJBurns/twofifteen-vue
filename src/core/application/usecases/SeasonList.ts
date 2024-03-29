import { ISeasonRepository } from '@src/core/application/interfaces/ISeasonRepository';
import { IUseCase } from '@src/core/application/interfaces/IUseCase';
import { IFilters } from '@src/core/application/interfaces/IFilters';
import { ISorting } from '@src/core/application/interfaces/ISorting';

export class SeasonList implements IUseCase, IFilters, ISorting {
  #filters: Array<string>;
  #sorting: Array<string>;

  constructor(private readonly seasons: ISeasonRepository) {
    this.#filters = [];
    this.#sorting = [];
  }

  get filters() {
    return this.#filters;
  }

  get sorting() {
    return this.#sorting;
  }

  execute() {
    console.log(this.seasons.getAll());
  }
}
