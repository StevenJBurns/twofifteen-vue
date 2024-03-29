import { IFilters } from '@src/core/application/interfaces/IFilters';
import { ISorting } from '@src/core/application/interfaces/ISorting';
import { IViewModel } from '@src/core/application/interfaces/IViewModel';

export class FranchiseViewModel implements IViewModel, IFilters, ISorting {
  #filters: Array<string>;
  #sorting: Array<string>;

  private constructor() {
    this.#filters = [];
    this.#sorting = [];
  }

  static create() {
    return new FranchiseViewModel();
  }

  get filters() {
    return this.#filters;
  }

  get sorting() {
    return this.#sorting;
  }
}
