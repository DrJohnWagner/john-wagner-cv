import React from "react"
import { Grid, Collapse } from "@mui/material"
// import Accordion from "@mui/material/Accordion"
// import AccordionDetails from "@mui/material/AccordionDetails"
// import AccordionSummary from "@mui/material/AccordionSummary"
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Typography from "@mui/material/Typography"

import GridOfToggleButtons from "./GridOfToggleButtons"

import useState from "../Functions/useState"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import professionalExperience from "../CV/ProfessionalExperience"
import data from "../Data"
// import * as cv from "../CV.json"

interface Props {
    sayMore: boolean
}

export const Do = (props: Props): JSX.Element => {
    const { sayMore } = props
    const labels = Array.from(new Set(professionalExperience.map((role) => role.label)))
    const [getLabel, setLabel] = useState(labels[0])
    const onLabel = (event: any, label: string) => {
        setLabel(label)
    }
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.do} keyword="do" />
            </Collapse>
            <Collapse in={!sayMore}>
                <GridOfToggleButtons strings={labels} value={getLabel()} spacing={2} onChange={onLabel} />
                <Grid container spacing={2}>
                    {professionalExperience
                        .filter((role) => role.label === getLabel())
                        .map((role) => (
                            <Grid item key={role.dates + role.title + role.organisation} xs={12}>
                                <Typography variant="body1" component="span">
                                    {role.dates} {role.title} {role.organisation}
                                    <br />
                                    {role.duties}
                                </Typography>
                            </Grid>
                        ))}
                </Grid>
            </Collapse>
        </>
    )
}

// // const [getExpanded, setExpanded] = useState(-1)
// // const onExperience = (panel: number) => (event: any, expanded: boolean) => {
// //     setExpanded(expanded ? panel : -1)
// // }
// return (
//     <>
//         <Collapse in={sayMore}>
//             <IAmJohn words={data.do} keyword="do" />
//         </Collapse>
//         <Collapse in={!sayMore}>
//             {experience.map((item, index) => (
//                 <Accordion key={item.dates} expanded={getExpanded() === index} onChange={onExperience(index)}>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography sx={{ width: "20%", flexShrink: 0 }}>{item.dates}</Typography>
//                         <Typography sx={{ color: "text.secondary" }}>
//                             {item.title}
//                             <br />
//                             {item.organisation}
//                         </Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>{item.duties}</Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             ))}
//         </Collapse>
//     </>
// )

export default Do
