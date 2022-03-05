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

export const Serve = (props: Props): JSX.Element => {
    const { sayMore } = props
    const { service } = cv
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.serve} keyword="serve" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={2}>
                    {service.map((item) => (
                        <Grid item key={item.dates + item.title + item.organisation} xs={12}>
                            <Typography variant="body1" component="span">
                                {item.dates} {item.title} {item.organisation}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </>
    )
}

export default Serve
