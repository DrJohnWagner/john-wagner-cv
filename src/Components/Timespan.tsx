import React from "react"
import { Box, Typography } from "@mui/material"
import Breakpoints from "../Types/Breakpoints"
// import getBreakpoints from "../Functions/getBreakpoints"
// import VerticalBarGrid from "./VerticalBarGrid"
// import TimepointGrid from "./TimepointGrid"
// import FromToGrid from "./FromToGrid"
// import TimeGrid from "./TimeGrid"

import Timepoint from "../Types/Timepoint"

// const getKey = ({ from, title, subtitle }: Timepoint) => from + title + subtitle

interface Props extends Breakpoints {
    timepoint: Timepoint
    align: "left" | "right"
    width: string
}

export const Timespan = (props: Props): JSX.Element => {
    const { timepoint, align, width } = props
    return (
        <Box
            key={timepoint.from + timepoint.to + timepoint.subtitle}
            sx={{
                align: align,
                textAlign: align,
                display: "flex",
                flexDirection: "row",
                justifyContent: align,
                margin: "0 auto 0 auto",
                height: "100%",
                // backgroundColor: "green",
            }}
        >
            {align === "left" && (
                <Box
                    sx={{
                        backgroundColor: (theme) => theme.palette.divider,
                        margin: "0px 12px",
                        width: { width },
                    }}
                />
            )}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0",
                }}
            >
                {timepoint.from !== timepoint.to && (
                    <Typography margin={"0px 0px auto 0px"} variant="subtitle1" display="block">
                        {timepoint.to}
                    </Typography>
                )}
                {timepoint.from === timepoint.to && (
                    <Typography margin={"auto 0px auto 0px"} variant="subtitle1" display="block">
                        {timepoint.from}
                    </Typography>
                )}
                {timepoint.from !== timepoint.to && (
                    <Typography margin={"auto 0px 0px 0px"} variant="subtitle1" display="block">
                        {timepoint.from}
                    </Typography>
                )}
            </Box>
            {align === "right" && (
                <Box
                    sx={{
                        backgroundColor: (theme) => theme.palette.divider,
                        margin: "0px 12px",
                        width: { width },
                    }}
                />
            )}
        </Box>
    )
}

export default Timespan
