import React from "react"
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material"
// import Typography from "@mui/material/Typography"

import getHashtag from "../Functions/getHashtag"

interface Props {
    strings: string[]
    value: string
    spacing?: number
    onChange?: ((event: React.SyntheticEvent<Element, Event>, value: any) => void) | undefined
}

const GridOfToggleButtons = (props: Props): JSX.Element => {
    const { strings, value, onChange } = props
    const spacing = props.spacing || 0
    return (
        <Grid container spacing={spacing}>
            <Grid item key="toggle-button-group" xs={12}>
                <ToggleButtonGroup exclusive value={value} onChange={onChange}>
                    {strings.map((s) => (
                        <ToggleButton key={s} value={s}>
                            {getHashtag(s)}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    )
}

export default GridOfToggleButtons
