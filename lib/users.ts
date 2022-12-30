export type userContributionType = {
    contributionCode: number,
    points: number,
}

export type userBadgeType = {
    address: string,
    link: string,

}

export type userType = {
    address: string,
    contributions: userContributionType[],
    username: string,
    badges: userBadgeType[],
    totalPoints: number,
    
}


const defaultUsers: userType[] = [
    {
        address: "ddfbghtregasrdfwqrewhmgjg",
        contributions: [
            {
                contributionCode: 1,
                points: 1342,
            },
            {
                contributionCode: 2,
                points: 1000,
            },
        ],
        username: "",
        badges: [],
        totalPoints: 2342,
    },
    {
        address: "ddfbghtrekhjgasrdfhmgjg",
        contributions: [
            {
                contributionCode: 1,
                points: 82,
            },
            {
                contributionCode: 2,
                points: 160,
            },
        ],
        username: "",
        badges: [],
        totalPoints: 242,
    },
    {
        address: "ddfbghtregassasfrdfhmgjg",
        contributions: [
            {
                contributionCode: 2,
                points: 22,
            },
        ],
        username: "",
        badges: [],
        totalPoints: 22,
    },
    {
        address: "ddfbghtregassdfgfsrdfhmgjg",
        contributions: [],
        username: "",
        badges: [],
        totalPoints: 0,
    },
    {
        address: "ddfbghtregabgsrddfgfhmgjg",
        contributions: [{
            contributionCode: 1,
            points: 1200,
        },
        {
            contributionCode: 2,
            points: 447,
        },
        {
            contributionCode: 2,
            points: 1600,
        },
    ],
        username: "",
        badges: [],
        totalPoints: 2847,
    },
    {
        address: "ddfbghtregasrdfgdfhmgjg",
        contributions: [
            {
                contributionCode: 2,
                points: 742,
            },
        ],
        username: "",
        badges: [],
        totalPoints: 742,
    },
    {
        address: "ddfbghtregasfgrdfhmgjg",
        contributions: [
            {
                contributionCode: 3,
                points: 342,
            },
        ],
        username: "",
        badges: [],
        totalPoints: 342,
    },
    {
        address: "ddfbghtregasruytrhdfhmgjg",
        contributions: [
            {
                contributionCode: 3,
                points: 242,
            },
        ],
        username: "",
        badges: [],
        totalPoints: 242,
    },
    {
        address: "ddfbghtregasrcbnvndfhmgjg",
        contributions: [
            {
                contributionCode: 1,
                points: 1342,
            },
            {
                contributionCode: 2,
                points: 1000,
            },
        ],
        username: "",
        badges: [],
        totalPoints: 2342,
    },

]

export type contributedUserType = {
    address: string;
    contribution: userContributionType;
    username: string;
    badges: userBadgeType[];
    totalPoints: number;
  }
  

export const getUsersContributingToCode = (_code: number) => {
    

    const usersWhoContributedInContributionCode = defaultUsers.filter(user => {

        const contributionsWithContributionCode = user.contributions.filter(contribution => {
            return contribution.contributionCode === _code
        })



        return (contributionsWithContributionCode.length > 0) 
    }).map(user => {
        return {
            address: user.address,
            contribution: user.contributions[0],
            username: user.username,
            badges: user.badges,
            totalPoints: user.totalPoints,
        };
    })


    console.log("usersWhoContributedInContributionCode", usersWhoContributedInContributionCode)

    return usersWhoContributedInContributionCode;
}