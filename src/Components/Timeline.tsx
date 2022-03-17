import React from "react"
import { Grid } from "@mui/material"
import Breakpoints from "../Types/Breakpoints"
import getBreakpoints from "../Functions/getBreakpoints"
import VerticalBarGrid from "./VerticalBarGrid"
import TimepointGrid from "./TimepointGrid"
import FromToGrid from "./FromToGrid"
import TimeGrid from "./TimeGrid"

import Timepoint from "../Types/Timepoint"

const getKey = ({ from, title, subtitle }: Timepoint) => from + title + subtitle

interface Props extends Breakpoints {
    timeline: Timepoint[]
}

export const Timeline = (props: Props): JSX.Element => {
    const { timeline } = props
    const { xs, sm, md, lg, xl } = getBreakpoints(props)
    const columns = 24
    const tpxs = typeof xs === "number" ? columns - 1 - xs : 2
    const tpsm = typeof sm === "number" ? columns - 1 - sm : tpxs
    const tpmd = typeof md === "number" ? columns - 1 - md : tpsm
    const tplg = typeof lg === "number" ? columns - 1 - lg : tpmd
    const tpxl = typeof xl === "number" ? columns - 1 - xl : tplg
    return (
        <Grid container columns={columns} spacing={2}>
            <Grid item key="spacing" xs={columns} />
            {timeline.map((timepoint, index) => [
                index % 2 == 1 ? (
                    timepoint.from !== timepoint.to ? (
                        <FromToGrid
                            xs={xs}
                            sm={sm}
                            md={md}
                            lg={lg}
                            xl={xl}
                            from={timepoint.from}
                            to={timepoint.to}
                            align="right"
                        />
                    ) : (
                        <TimeGrid
                            xs={xs}
                            sm={sm}
                            md={md}
                            lg={lg}
                            xl={xl}
                            key={"from-" + getKey(timepoint)}
                            time={timepoint.from}
                            align="right"
                        />
                    )
                ) : null,
                index % 2 == 1 ? (
                    <VerticalBarGrid key={timepoint.from + timepoint.to + timepoint.subtitle} align="right" xs={1} />
                ) : null,
                <TimepointGrid
                    timepoint={timepoint}
                    xs={tpxs}
                    sm={tpsm}
                    md={tpmd}
                    lg={tplg}
                    xl={tpxl}
                    key={timepoint.from + timepoint.to + timepoint.title + timepoint.subtitle}
                />,
                index % 2 == 0 ? (
                    <VerticalBarGrid key={timepoint.from + timepoint.to + timepoint.subtitle} align="left" xs={1} />
                ) : null,
                index % 2 == 0 ? (
                    timepoint.from !== timepoint.to ? (
                        <FromToGrid
                            xs={xs}
                            sm={sm}
                            md={md}
                            lg={lg}
                            xl={xl}
                            from={timepoint.from}
                            to={timepoint.to}
                            align="left"
                        />
                    ) : (
                        <TimeGrid
                            xs={xs}
                            sm={sm}
                            md={md}
                            lg={lg}
                            xl={xl}
                            key={"from-" + getKey(timepoint)}
                            time={timepoint.from}
                            align="left"
                        />
                    )
                ) : null,
            ])}
        </Grid>
    )
}

export default Timeline
