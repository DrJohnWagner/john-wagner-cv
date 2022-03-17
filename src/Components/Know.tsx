import React from "react"
import { Grid, Collapse } from "@mui/material"
import Typography from "@mui/material/Typography"

import GridOfChips from "./GridOfChips"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import data from "../Data"
import cv from "../CV"

interface Props {
    sayMore: boolean
}

const Know = (props: Props): JSX.Element => {
    const { sayMore } = props
    const { expertise, industries, skills } = cv
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.know} keyword="know" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={2}>
                    {expertise.map((s) => (
                        <Grid item key={s} xs={4}>
                            <Typography variant="body1" component="span">
                                {s}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <GridOfChips
                    strings={industries}
                    label={"<label>industry knowledge</label>"}
                    columns={8}
                    spacing={2}
                    xs={4}
                    sm={2}
                    md={2}
                    lg={1}
                    xl={1}
                />
                <GridOfChips
                    strings={skills.sort((a, b) => a.localeCompare(b))}
                    label="<label>additional skills</label>"
                    columns={24}
                    spacing={2}
                    xs={8}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                />
                {/* <Grid container columns={24} spacing={2}>
                    <Grid item key="additional-skills-separator" xs={24} />
                    <Grid item key="additional-skills" xs={24}>
                        <Typography variant="button" component="span">
                            {"<label>additional skills</label>"}
                        </Typography>
                    </Grid>
                    {skills.map((s) => (
                        <Grid item key={s} xs={8} sm={6} md={4} lg={3} xl={2}>
                            <Chip label={getHashtag(s)} variant="outlined" />
                        </Grid>
                    ))}
                </Grid> */}
            </Collapse>
        </>
    )
}

export default Know
