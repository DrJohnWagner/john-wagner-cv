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

export const Teach = (props: Props): JSX.Element => {
    const { sayMore } = props
    const { teaching } = cv
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.teach} keyword="teach" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={2}>
                    {teaching.map((item) => (
                        <Grid item key={item.dates + item.course + item.organisation} xs={12}>
                            <Typography variant="body1" component="span">
                                {item.dates} {item.course} {item.organisation}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </>
    )
}

export default Teach
