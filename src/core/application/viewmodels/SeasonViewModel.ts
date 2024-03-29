import { IViewModel } from '@src/core/application/interfaces/IViewModel';
import { Season } from '@src/core/domain/season/Season';

export class SeasonViewModel implements IViewModel {
  private constructor(private readonly season: Season) {}

  static create() {
    return Season.create({ year: 2024 });
  }

  get properties() {
    return { ...this.season.properties };
  }
}
