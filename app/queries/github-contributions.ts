export const GITHUB_CONTRIBUTION_QUERY =`
    query($userName: String!, $from: DateTime!, $to: DateTime!){
        user(login: $userName){
            contributionsCollection(from: $from, to: $to){
               contributionCalendar {
                 totalContributions
                 weeks{
                    contributionDays{
                        date
                        contributionCount
                    }
                 }
               }
            }
        }
    }`;