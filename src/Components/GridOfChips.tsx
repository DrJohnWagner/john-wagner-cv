import React from "react"
import { Chip, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"

import getHashtag from "../Functions/getHashtag"

interface Props {
    strings: string[]
    label: string
    columns?: number
    spacing?: number
    xs?: number
    sm?: number | boolean | "auto"
    md?: number | boolean | "auto"
    lg?: number | boolean | "auto"
    xl?: number | boolean | "auto"
}

const GridOfChips = (props: Props): JSX.Element => {
    const { strings, label } = props
    const columns = props.columns || 12
    const spacing = props.spacing || 0
    const xs = props.xs || false
    const sm = props.sm || false
    const md = props.md || false
    const lg = props.lg || false
    const xl = props.xl || false
    return (
        <Grid container columns={columns} spacing={spacing}>
            <Grid item key="additional-skills-separator" xs={columns} />
            <Grid item key="additional-skills" xs={columns}>
                <Typography variant="button" component="span">
                    {label}
                </Typography>
            </Grid>
            {strings.map((s) => (
                <Grid item key={s} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                    <Chip label={getHashtag(s)} variant="outlined" />
                </Grid>
            ))}
        </Grid>
    )
}

export default GridOfChips
