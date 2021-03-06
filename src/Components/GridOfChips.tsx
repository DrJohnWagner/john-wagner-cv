import React from "react"
import { Avatar, Box, Chip, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import Breakpoints from "../Types/Breakpoints"
import getHashtag from "../Functions/getHashtag"
import getBreakpoints from "../Functions/getBreakpoints"

const ICONS = process.env.PUBLIC_URL + "/assets/icons"

interface Props extends Breakpoints {
    strings: string[]
    label: string
    columns?: number
    spacing?: number
    showAvatars?: boolean
}

const GridOfChips = (props: Props): JSX.Element => {
    const { strings, label } = props
    const columns = props.columns || 12
    const spacing = props.spacing || 0
    const showAvatars = props.showAvatars || false
    const { xs, sm, md, lg, xl } = getBreakpoints(props)
    return (
        <Box style={{ textAlign: "center" }}>
            <Grid container columns={columns} spacing={spacing}>
                <Grid item key="spacing" xs={columns} />
                <Grid item key="additional-skills" xs={columns}>
                    <Typography variant="h6" component="span">
                        {label}
                    </Typography>
                </Grid>
                {strings.map((s) => (
                    <Grid item key={s} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                        <Chip
                            // avatar={undefined}
                            avatar={
                                showAvatars ? (
                                    <Avatar
                                        // sx={{
                                        //     border: 1,
                                        //     borderColor: (theme) => theme.palette.primary.main,
                                        //     backgroundColor: (theme) => theme.palette.background.default,
                                        // }}
                                        alt={s}
                                        src={`${ICONS}/${s.toLowerCase()}.png`}
                                    />
                                ) : undefined
                            }
                            size="medium"
                            label={getHashtag(s)}
                            variant="outlined"
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default GridOfChips
