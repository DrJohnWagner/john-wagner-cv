import React from "react"
import { Grid, Collapse } from "@mui/material"
import Typography from "@mui/material/Typography"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import data from "../Data"
import * as cv from "../CV.json"

interface Props {
    sayMore: boolean
}

export const Learn = (props: Props): JSX.Element => {
    const { sayMore } = props
    const { education } = cv
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.learn} keyword="learn" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={10}>
                    {education.map((item) => (
                        <Grid item container key={item.year + item.degree} xs={12}>
                            <Grid item key={item.year} xs={12}>
                                <Typography variant="h5" component="span">
                                    {item.year}
                                </Typography>
                            </Grid>
                            <Grid item key={item.degree} xs={12}>
                                <Typography variant="h5" component="span">
                                    {item.degree}
                                </Typography>
                            </Grid>
                            <Grid item key={item.institution} xs={12}>
                                <Typography variant="h5" component="span">
                                    {item.institution}
                                </Typography>
                            </Grid>
                            {item.info && (
                                <Grid item key={item.info} xs={12}>
                                    <Typography variant="h5" component="span">
                                        {item.info}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </>
    )
}

export default Learn
