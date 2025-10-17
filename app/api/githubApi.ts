import { GITHUB_CONTRIBUTION_QUERY } from "../queries/github-contributions";
import { ContributionData, ContributionDay } from "../types/github-contributions"

export const fetchGithubContribution = async({username, year}:{username: string, year: number}):Promise<ContributionData> =>{

    const startDate = `${year}-01-01T00:00:00Z`;
    const endDate = `${year}-12-31T23:59:59Z`;
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if(!token){
        throw new Error("GitHub token not found. Please set NEXT_PUBLIC_GITHUB_TOKEN.");
    }

   const response = await fetch('https://api.github.com/graphql',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
        query: GITHUB_CONTRIBUTION_QUERY,
        variables: {
            userName : username,
            from: startDate,
            to: endDate,
        },
    }),
   });

   if(!response.ok){
    throw new Error(`GitHub API error: ${response.statusText}`);
   }

  const result = await response.json();
  
  if(result.errors){
    throw new Error(result.errors[0].message);
  }
  const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;
  if(!calendar){
    return {totalContributions: 0};
  }
   const contribData : ContributionData = {totalContributions: calendar.totalContributions};
   calendar.weeks.forEach((week: { contributionDays: ContributionDay[] }) => {
    week.contributionDays.forEach(day => {
      contribData[day.date] = day.contributionCount;
    });
  });

  return contribData;

}