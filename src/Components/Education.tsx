import React from "react"
import { Box, Grid } from "@mui/material"

import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

import education from "../CV/Education"

export const Education = (): JSX.Element => {
    return (
        <Grid container spacing={0}>
            {education.map((item, index) => (
                <Grid item container key={item.year + item.degree} xs={12}>
                    {/* {index > 0 && <Grid item key="LeftEmpty" xs={2} sm={2} md={3} lg={4} />} */}
                    {index > 0 && [
                        <Grid item key="LeftEmpty" xs={2} sm={2} md={3} lg={1} />,
                        <Grid item key={`center-${item.degree}`} xs={3} sm={3} md={3} lg={2} display="flex">
                            <Box
                                sx={{
                                    backgroundColor: (theme) => theme.palette.secondary.light,
                                    height: "50px",
                                    width: "4px",
                                    margin: "auto",
                                    border: "0px",
                                }}
                            />
                        </Grid>,
                        <Grid item key="RightEmpty" xs={7} sm={7} md={6} lg={9} />,
                    ]}
                    <Grid item key={item.year} xs={2} md={3} lg={1} display="flex" sx={{ align: "right" }}>
                        <Typography margin="auto 0px auto auto" variant="h5" component="span">
                            {item.year}
                        </Typography>
                    </Grid>
                    <Grid item key={item.degree} xs={3} sm={3} md={3} lg={2} display="flex">
                        <Avatar
                            sx={{
                                border: 4,
                                borderColor: "secondary.light", //(theme) => theme.palette.secondary.light,
                                margin: "auto",
                                height: "104px",
                                width: "104px",
                            }}
                        >
                            <Typography variant="h4" component="span">
                                {item.degree}
                            </Typography>
                        </Avatar>
                    </Grid>
                    <Grid item key={item.institution} xs={7} sm={7} md={6} lg={9} display="flex">
                        <Box margin="auto auto auto 0px">
                            <Typography variant="h6" display="block" component="span">
                                {item.institution}
                            </Typography>
                            {item.info && (
                                <Typography variant="body1" display="block" component="span">
                                    {item.info}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default Education
