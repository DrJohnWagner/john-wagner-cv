import React from "react"
import { Grid } from "@mui/material"
import Breakpoints from "../Types/Breakpoints"
import getBreakpoints from "../Functions/getBreakpoints"
// import VerticalBarGrid from "./VerticalBarGrid"
import TimepointGrid from "./TimepointGrid"
// import FromToGrid from "./FromToGrid"
// import TimeGrid from "./TimeGrid"
import Timespan from "./Timespan"

import Timepoint from "../Types/Timepoint"

// const getKey = ({ from, title, subtitle }: Timepoint) => from + title + subtitle

interface Props extends Breakpoints {
    timeline: Timepoint[]
}

export const Timeline = (props: Props): JSX.Element => {
    const { timeline } = props
    const { xs, sm, md, lg, xl } = getBreakpoints(props)
    const columns = 12
    const tpxs = typeof xs === "number" ? columns - xs : 1
    const tpsm = typeof sm === "number" ? columns - sm : tpxs
    const tpmd = typeof md === "number" ? columns - md : tpsm
    const tplg = typeof lg === "number" ? columns - lg : tpmd
    const tpxl = typeof xl === "number" ? columns - xl : tplg
    return (
        <Grid container columns={columns} spacing={3}>
            <Grid item key="spacing" xs={columns} />
            {timeline.map((timepoint, index) => [
                index % 2 == 1 && (
                    <Grid item key="spacing" xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                        <Timespan timepoint={timepoint} align="right" width="4px" />
                    </Grid>
                ),
                <TimepointGrid
                    timepoint={timepoint}
                    xs={tpxs}
                    sm={tpsm}
                    md={tpmd}
                    lg={tplg}
                    xl={tpxl}
                    key={timepoint.from + timepoint.to + timepoint.title + timepoint.subtitle}
                />,
                index % 2 == 0 && (
                    <Grid item key="spacing" xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                        <Timespan timepoint={timepoint} align="left" width="4px" />
                    </Grid>
                ),
            ])}
        </Grid>
    )
}

export default Timeline
