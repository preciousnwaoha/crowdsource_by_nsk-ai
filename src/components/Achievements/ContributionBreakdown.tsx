import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const defaultData = [
    {
        name: "Translation Validation",
        contributionsMade: 203,
        contributionId: "contribute1",
    },
    {
        name: "Translation",
        contributionsMade: 20,
        contributionId: "contribute2",
    },
    {
        name: "Word Translation",
        contributionsMade: 293,
        contributionId: "contribute3",
    },
]

const ContributionBreakdown = () => {

    const contributionsData = defaultData.sort((a, b) => {
        return b.contributionsMade - a.contributionsMade
    })

  return (
    <Box>
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1,
            bgcolor: "rgba(0,0,0,0.2)"
        }}>
            <Typography variant="body2" component="h4" sx={{
                fontWeight: 300,
            }}>Categories</Typography>
            <Typography variant="body2" component="h4" sx={{
                fontWeight: 300,
            }}>Contributions</Typography>
        </Box>
        <ul style={{
            listStyleType: "none",
            paddingLeft: 0,
        }}>
        {
            contributionsData.map(category => {
                return (
                    <li key={category.contributionId} style={{
                        // outline: "1px solid red",
                        padding: "0 1rem",
                        margin: "8px 0",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                    }}>
                        <Box sx={{
                            borderLeft: 5,
                            borderColor: "secondary.main",
                            pl: 1,
                        }}>
                            <Typography variant="body2" sx={{
                                fontSize: "0.85rem",
                                
                            }}>{category.name}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{
                                fontSize: "100%",
                                fontWeight: 500,
                            }}>{category.contributionsMade}</Typography>
                    </li>
                )
            })
        }
        </ul>
        
    </Box>
  )
}

export default ContributionBreakdown