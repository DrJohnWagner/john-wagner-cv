import React from "react"
import { Grid, Collapse } from "@mui/material"
import Typography from "@mui/material/Typography"

import GridOfChips from "./GridOfChips"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import keywords from "../CV/Keywords"
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
                <IAmJohn words={keywords.know.filter(() => Math.random() < 0.5)} keyword="know" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={2}>
                    <Grid item key="additional-skills" xs={12} style={{ textAlign: "center" }}>
                        <Typography variant="h6" component="span">
                            {"<label>deep expertise</label>"}
                        </Typography>
                    </Grid>
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
                    columns={24}
                    spacing={2}
                    xs={12}
                    sm={8}
                    md={6}
                    lg={6}
                    xl={3}
                />
                <GridOfChips
                    strings={skills.sort((a, b) => a.localeCompare(b))}
                    label="<label>additional skills</label>"
                    showAvatars
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
