import { useQuery } from "@tanstack/react-query";
import { ContributionData } from "../types/github-contributions";
import { fetchGithubContribution } from "../api/githubApi";

export const GetContributionsQueryKey = (username: string, year: number) => [
  "github-contributions",
  username,
  year,
];
export function useContributions(username: string, year: number) {
  return useQuery<ContributionData, Error>({
    queryKey: GetContributionsQueryKey(username, year),
    queryFn: () => fetchGithubContribution({ username, year }),
    enabled: !!username && year > 0,
    staleTime: 1000 * 60 * 5,
  });
}
