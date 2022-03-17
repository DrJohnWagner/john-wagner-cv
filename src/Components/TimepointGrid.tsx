import React from "react"
import { Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import Breakpoints from "../Types/Breakpoints"
import getBreakpoints from "../Functions/getBreakpoints"

import Timepoint from "../Types/Timepoint"

interface Props extends Breakpoints {
    timepoint: Timepoint
}

export const TimepointGrid = (props: Props): JSX.Element => {
    const { timepoint } = props
    const { xs, sm, md, lg, xl } = getBreakpoints(props)
    return (
        <Grid item textAlign="justify" xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <Typography variant="h6" component="span" display="block">
                {timepoint.title}
            </Typography>
            <Typography variant="subtitle1" component="span" display="block">
                {timepoint.subtitle}
            </Typography>
            <Typography variant="body1" component="span" display="block">
                {timepoint.description}
            </Typography>
            {timepoint.bullets.map((bullet) => (
                <div key={bullet} style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                        // key={bullet + "-1"}
                        style={{ margin: "2px 0px 0px 16px" }}
                        variant="body1"
                        component="span"
                        // display="block"
                    >
                        {"• "}
                    </Typography>
                    <Typography
                        // key={bullet}
                        style={{ margin: "2px 0px 0px 16px" }}
                        variant="body1"
                        component="span"
                        display="block"
                    >
                        {bullet}
                    </Typography>
                    ,
                </div>
            ))}
        </Grid>
    )
}

export default TimepointGrid
