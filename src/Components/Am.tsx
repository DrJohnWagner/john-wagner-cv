import React from "react"
import { Avatar, Badge, Box, Grid, Collapse, Tooltip } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

import GridOfChips from "./GridOfChips"
import useRainbow from "../Functions/useRainbow"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import data from "../Data"
import cv from "../CV"

const IMAGES = process.env.PUBLIC_URL + "/assets/images"

interface Props {
    sayMore: boolean
}

export const Am = (props: Props): JSX.Element => {
    const { sayMore } = props
    const { summary, coreValues } = cv
    const label = "<label>core values</label>"
    //
    const intervalDelay = 1300
    const transitionDelay = intervalDelay * 1.25
    const colors = useRainbow({ intervalDelay })
    const colorKeys = Object.keys(colors)
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.am} keyword="am" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={1}>
                    <Grid
                        item
                        container
                        style={{ alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center" }}
                        xs={12}
                    >
                        <Tooltip
                            placement="right"
                            title={
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="body2" color="inherit">
                                        Rainbow animation comes from the brilliant Joshua Comeau
                                        (https://github.com/joshwcomeau).
                                    </Typography>
                                </Box>
                            }
                        >
                            <Badge
                                sx={{
                                    "& .MuiBadge-badge": {
                                        // color: "lightgreen",
                                        // backgroundColor: "green",
                                        ...colors,
                                        transition: `
                                    ${colorKeys[0]} ${transitionDelay}ms linear,
                                    ${colorKeys[1]} ${transitionDelay}ms linear,
                                    ${colorKeys[2]} ${transitionDelay}ms linear
                                    `,
                                        background: `
                                    radial-gradient(
                                        circle at top left,
                                        var(${colorKeys[2]}),
                                        var(${colorKeys[1]}),
                                        var(${colorKeys[0]})
                                    )
                                    `,
                                    },
                                }}
                                // color="secondary"
                                badgeContent={"They/Them"}
                            >
                                <Avatar
                                    alt="John Wagner, PhD"
                                    src={`${IMAGES}/John.png`}
                                    sx={{
                                        border: "4px solid",
                                        borderColor: (theme) => theme.palette.primary.main,
                                        width: 96,
                                        height: 96,
                                    }}
                                />
                            </Badge>
                        </Tooltip>
                        <Typography variant="h4" component="span" display="block">
                            John Wagner, PhD
                        </Typography>
                        <Typography variant="h5" component="span" display="block">
                            Computational Biologist | Data Scientist | Applied Mathematician
                        </Typography>
                        <Typography variant="h6" component="span" display="block">
                            Research | Development | Innovation | Leadership
                        </Typography>
                        <Typography variant="subtitle2" component="span" display="block">
                            Dr.John.Wagner@gmail.com
                            <IconButton
                                color="primary"
                                aria-label="mailto"
                                onClick={() => {
                                    window.open("mailto:Dr.John.Wagner@gmail.com?subject=Hey, John!", "_blank")
                                }}
                            >
                                <MailOutlineIcon />
                            </IconButton>
                            <IconButton
                                color="primary"
                                aria-label="linkedin"
                                onClick={() => {
                                    window.open("https://www.linkedin.com/in/Dr-John-Wagner/", "_blank")
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            Dr-John-Wagner at LinkedIn
                        </Typography>
                        <Typography variant="subtitle1" component="span" display="block">
                            <IconButton
                                color="primary"
                                aria-label="linkedin"
                                onClick={() => {
                                    window.open("https://tinyurl.com/5n7enz3z", "_blank")
                                }}
                            >
                                <LocationOnIcon />
                            </IconButton>
                            Occidental, California
                        </Typography>
                    </Grid>
                    <Grid item xs={12} />
                    {summary.text.map((s) => (
                        <Grid item key={s} xs={12}>
                            <Typography variant="body1" component="span">
                                {s}
                            </Typography>
                        </Grid>
                    ))}
                    {summary.bullets.map((bullet) => (
                        <div key={bullet} style={{ display: "flex", flexDirection: "row" }}>
                            <Typography
                                // key={bullet + "-1"}
                                style={{ margin: "2px 0px 0px 16px" }}
                                variant="body1"
                                component="span"
                                // display="block"
                            >
                                {"• "}
                            </Typography>
                            <Typography
                                // key={bullet}
                                style={{ margin: "2px 0px 0px 16px" }}
                                variant="body1"
                                component="span"
                                display="block"
                            >
                                {bullet}
                            </Typography>
                        </div>
                    ))}
                </Grid>
                <GridOfChips strings={coreValues} label={label} columns={12} spacing={2} xs={6} sm={4} md={2} />
            </Collapse>
        </>
    )
}

export default Am
