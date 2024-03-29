export type Team = {
  season: number;
  name: string;
  league: string;
  division?: string;
  attendance?: number;
  winningPercentage?: (wins: number, loss: number, tie: number) => number;
  wins: number;
  lost: number;
  ties: number;
};
