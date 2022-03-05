import React from "react"
import { Grid, Collapse } from "@mui/material"
import Typography from "@mui/material/Typography"

import GridOfToggleButtons from "./GridOfToggleButtons"
import useState from "../Functions/useState"

import IAmJohn from "../IAmJohn"
import patents from "../CV/Patents"
import data from "../Data"

interface Props {
    sayMore: boolean
}

export const Invent = (props: Props): JSX.Element => {
    const { sayMore } = props
    const labels = Array.from(new Set(patents.map((patent) => patent.label)))
    const [getLabel, setLabel] = useState(labels[0])
    const onLabel = (event: any, label: string) => {
        setLabel(label)
    }
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.invent} keyword="invent" />
            </Collapse>
            <Collapse in={!sayMore}>
                <GridOfToggleButtons strings={labels} value={getLabel()} spacing={2} onChange={onLabel} />
                <Grid container spacing={2}>
                    {patents
                        .filter((patent) => patent.label === getLabel())
                        .map((patent) => (
                            <Grid item key={patent.title} xs={12} md={6}>
                                <Typography variant="body1" component="span">
                                    {patent.title}
                                </Typography>
                            </Grid>
                        ))}
                </Grid>
            </Collapse>
        </>
    )
}

export default Invent
