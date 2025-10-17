export interface ContributionData{
  [date:string]: number;
  totalContributions: number;
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
}