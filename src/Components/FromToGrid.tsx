import React from "react"
import { Grid, Typography } from "@mui/material"
import Breakpoints from "../Types/Breakpoints"
import getBreakpoints from "../Functions/getBreakpoints"

interface Props extends Breakpoints {
    from: string
    to: string
    align: "left" | "right"
}

const FromToGrid = (props: Props): JSX.Element => {
    const { from, to, align } = props
    const key = align === "left" ? "right" : "left"
    const toMargin = align === "left" ? "0px auto auto 0px" : "0px 0px auto auto"
    const fromMargin = align === "left" ? "auto auto 0px 0px" : "auto 0px 0px auto"
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
            key={key + from + to}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
        >
            <Typography margin={toMargin} variant="h6" display="block">
                {to}
            </Typography>
            <Typography margin={fromMargin} variant="h6" display="block">
                {from}
            </Typography>
        </Grid>
    )
}

export default FromToGrid
