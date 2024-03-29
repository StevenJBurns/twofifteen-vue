import { Team } from '@src/core/domain/team/Team';

export type SeasonParameters = {
  year: number;
  champion?: Team;
};
