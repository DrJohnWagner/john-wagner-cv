import React from "react"
import { Box, Grid } from "@mui/material"
// import { Theme } from "@mui/material/styles"

const VerticalBarGrid = ({
    key,
    align,
    xs,
    show,
}: {
    key: string
    align: string
    xs: number
    show?: boolean
}): JSX.Element => {
    const style = { textAlign: align }
    const width = show === undefined || show === true ? "4px" : "0px"
    return (
        <Grid item sx={style} key={align + "-vertical-bar-" + key} xs={xs}>
            <Box
                sx={{
                    backgroundColor: (theme) => theme.palette.divider,
                    height: "100%",
                    width: { width },
                    border: "0px",
                    margin: "0 auto 0 auto",
                }}
            />
        </Grid>
    )
}

export default VerticalBarGrid
