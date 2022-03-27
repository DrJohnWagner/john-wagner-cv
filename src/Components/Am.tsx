import React from "react"
import { Avatar, Badge, Grid, Collapse } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

import GridOfChips from "./GridOfChips"
// import useRainbow from "../Functions/useRainbow"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import keywords from "../CV/Keywords"
import summary from "../CV/Summary"
import values from "../CV/Values"

const IMAGES = process.env.PUBLIC_URL + "/assets/images"

interface Props {
    sayMore: boolean
}

export const Am = (props: Props): JSX.Element => {
    const { sayMore } = props
    const label = "<label>core values</label>"
    //
    // const intervalDelay = 1300 * 100
    // // const transitionDelay = intervalDelay * 1.25
    // const colors = useRainbow({ intervalDelay })
    // const colorKeys = Object.keys(colors)
    // console.log(colorKeys)
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={keywords.am} keyword="am" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={1}>
                    <Grid
                        item
                        container
                        style={{ alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center" }}
                        xs={12}
                    >
                        <Badge
                            sx={{
                                "& .MuiBadge-badge": {
                                    border: "1px solid",
                                    borderColor: (theme) => theme.palette.primary.main,
                                    backgroundColor: (theme) => theme.palette.background.default, //"green",
                                },
                            }}
                            // color="secondary"
                            badgeContent={
                                <Typography
                                    sx={{
                                        fontSize: "0.9rem",
                                        borderColor: (theme) => theme.palette.primary.main,
                                        background:
                                            "-webkit-linear-gradient(left, red, orange, green, blue, indigo, violet)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    They/Them
                                </Typography>
                            }
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
                <GridOfChips strings={values} label={label} columns={12} spacing={2} xs={6} sm={4} md={2} />
            </Collapse>
        </>
    )
}

export default Am
