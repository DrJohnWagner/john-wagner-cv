import React from "react"
import { Grid, Collapse } from "@mui/material"
import Typography from "@mui/material/Typography"

import GridOfChips from "./GridOfChips"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import data from "../Data"
import * as cv from "../CV.json"

interface Props {
    sayMore: boolean
}

export const Am = (props: Props): JSX.Element => {
    const { sayMore } = props
    const { summary, coreValues } = cv
    const label = "<label>core values</label>"
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.am} keyword="am" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={1}>
                    {summary.map((s) => (
                        <Grid item key={s} xs={12}>
                            <Typography variant="body1" component="span">
                                {s}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <GridOfChips strings={coreValues} label={label} columns={12} spacing={2} xs={6} sm={4} md={2} />
            </Collapse>
        </>
    )
}

export default Am
