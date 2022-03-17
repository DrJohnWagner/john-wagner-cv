import React from "react"
import { Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import Breakpoints from "../Types/Breakpoints"
import getBreakpoints from "../Functions/getBreakpoints"

interface Props extends Breakpoints {
    time: string
    align: "left" | "right"
}

const TimeGrid = (props: Props): JSX.Element => {
    const { time, align } = props
    const key = align === "left" ? "right" : "left"
    const toMargin = align === "left" ? "auto auto auto 0px" : "auto 0px auto auto"
    const { xs, sm, md, lg, xl } = getBreakpoints(props)
    return (
        <Grid
            item
            sx={{
                align: align,
                textAlign: align,
                display: "flex",
                flexDirection: "column",
            }}
            key={key + time}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
        >
            <Typography margin={toMargin} variant="h6" display="block">
                {time}
            </Typography>
        </Grid>
    )
}

export default TimeGrid
