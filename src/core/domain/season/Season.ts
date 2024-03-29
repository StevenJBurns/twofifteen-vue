import { SeasonParameters } from '@src/core/domain/season/SeasonParameters';

export class Season {
  private constructor(private readonly newSeasonArgs: SeasonParameters) {}

  static create(newSeasonArgs: SeasonParameters) {
    return new Season({ ...newSeasonArgs });
  }

  get properties() {
    return {
      year: this.newSeasonArgs.year,
      champion: this.newSeasonArgs.champion,
    };
  }
}
