export type Score = Readonly<{
  userName: string;
  civilScore: number;
  militaryScore: number;
  scienceScore: number;
  commercialScore: number;
  guildScore: number;
  cityScore: number;
  leaderScore: number;
  coinScore: number;
  wonderScore: number;
  sum: () => number;
}>;
