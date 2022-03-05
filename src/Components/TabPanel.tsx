import { Box } from "@mui/material"
// import { Box, Typography } from "@mui/material"
import React from "react"

interface Props {
    children: React.ReactNode
    value: number
    index: number
}

function TabPanel(props: Props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                // FIX THIS! This puts a p:3 in here...
                // But then the grid has -16 margins
                // that offset most of this (p: 2 = 16)
                <Box sx={{ p: 3 }}>{children}</Box>
            )}
        </div>
    )
}

// function TabPanel(props: Props) {
//     const { children, value, index, ...other } = props

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 // FIX THIS! PUT STYLING ELSEWHERE!
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     )
// }

export default TabPanel
