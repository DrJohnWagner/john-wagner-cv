import React from "react"
import { Grid } from "@mui/material"
import Breakpoints from "../Types/Breakpoints"
import getBreakpoints from "../Functions/getBreakpoints"
// import VerticalBarGrid from "./VerticalBarGrid"
import TimepointGrid from "./TimepointGrid"
import Timespan from "./Timespan"

import Timepoint from "../Types/Timepoint"

interface Props extends Breakpoints {
    timeline: Timepoint[]
}

const getKey = ({ from, title, subtitle }: Timepoint) => from + title + subtitle

export const Timetable = (props: Props): JSX.Element => {
    const { timeline } = props
    const { xs, sm, md, lg, xl } = getBreakpoints(props)
    const columns = 12
    const tpxs = typeof xs === "number" ? columns - xs : 2
    const tpsm = typeof sm === "number" ? columns - sm : tpxs
    const tpmd = typeof md === "number" ? columns - md : tpsm
    const tplg = typeof lg === "number" ? columns - lg : tpmd
    const tpxl = typeof xl === "number" ? columns - xl : tplg
    return (
        <Grid container spacing={3} columns={columns}>
            <Grid item key="spacing" xs={columns} />
            {timeline.map((timepoint) => [
                <Grid item key="spacing" xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                    <Timespan timepoint={timepoint} align="right" width="4px" />
                </Grid>,
                <TimepointGrid
                    xs={tpxs}
                    sm={tpsm}
                    md={tpmd}
                    lg={tplg}
                    xl={tpxl}
                    timepoint={timepoint}
                    key={getKey(timepoint)}
                />,
            ])}
        </Grid>
    )
}

export default Timetable
