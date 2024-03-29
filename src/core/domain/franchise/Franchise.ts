import { Team } from '@src/core/domain/team/Team';

export type Franchise = {
  id: string;
  active: boolean;
  teams: Array<Team>;
};
