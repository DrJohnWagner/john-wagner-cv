import React from "react"
import { Grid } from "@mui/material"
import Breakpoints from "../Types/Breakpoints"
import getBreakpoints from "../Functions/getBreakpoints"
import VerticalBarGrid from "./VerticalBarGrid"
import TimepointGrid from "./TimepointGrid"
import TimeGrid from "./TimeGrid"

import Timepoint from "../Types/Timepoint"

interface Props extends Breakpoints {
    timeline: Timepoint[]
}

const getKey = ({ from, title, subtitle }: Timepoint) => from + title + subtitle

export const Timetable = (props: Props): JSX.Element => {
    const { timeline } = props
    const { xs, sm, md, lg, xl } = getBreakpoints(props)
    const tpxs = typeof xs === "number" ? 10 - 2 * xs : 3
    const tpsm = typeof sm === "number" ? 10 - 2 * sm : tpxs
    const tpmd = typeof md === "number" ? 10 - 2 * md : tpsm
    const tplg = typeof lg === "number" ? 10 - 2 * lg : tpmd
    const tpxl = typeof xl === "number" ? 10 - 2 * xl : tplg
    return (
        <Grid container spacing={2}>
            <Grid item key="spacing" xs={12} />
            {timeline.map((timepoint) => [
                <TimeGrid
                    xs={xs}
                    sm={sm}
                    md={md}
                    lg={lg}
                    xl={xl}
                    key={"from-" + getKey(timepoint)}
                    time={timepoint.from}
                    align="right"
                />,
                <VerticalBarGrid key={"from-bar-" + getKey(timepoint)} align="right" xs={1} />,
                <TimepointGrid
                    xs={tpxs}
                    sm={tpsm}
                    md={tpmd}
                    lg={tplg}
                    xl={tpxl}
                    timepoint={timepoint}
                    key={getKey(timepoint)}
                />,
                <VerticalBarGrid show={timepoint.to !== ""} key={"to-bar-" + getKey(timepoint)} align="left" xs={1} />,
                <TimeGrid
                    xs={xs}
                    sm={sm}
                    md={md}
                    lg={lg}
                    xl={xl}
                    key={"to-" + getKey(timepoint)}
                    time={timepoint.to}
                    align="left"
                />,
            ])}
        </Grid>
    )
}

export default Timetable
