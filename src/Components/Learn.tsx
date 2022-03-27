import React from "react"
import { Button, Collapse, Grid, Pagination } from "@mui/material"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

import IAmJohn from "../IAmJohn"
import Education from "./Education"
import CaptionedImage from "./CaptionedImage"
import useState from "../Functions/useState"
import keywords from "../CV/Keywords"
import courses from "../CV/Courses"

interface Props {
    sayMore: boolean
}

export const Learn = (props: Props): JSX.Element => {
    const { sayMore } = props
    const theme = useTheme()
    const md = useMediaQuery(theme.breakpoints.only("md"))
    const lg = useMediaQuery(theme.breakpoints.only("lg"))
    const xl = useMediaQuery(theme.breakpoints.only("xl"))
    const [getPage, setPage] = useState<number>(1) //topics[0])
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={keywords.learn} keyword="learn" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Grid container spacing={0}>
                    {(md || lg || xl) && (
                        <Grid
                            item
                            key="left-column"
                            xs={0}
                            md={4}
                            lg={5}
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CaptionedImage image="Joel Keizer" width={"320px"} margin="8px 24px" />
                        </Grid>
                    )}
                    <Grid item key="right-column" xs={12} md={8} lg={7}>
                        <Education />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item key="spacing" xs={12} />
                    <Grid item key="spacing" xs={12} />
                    <Grid
                        item
                        container
                        key="additional-skills-label"
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6" component="span">
                            {"<label>additional courses</label>"}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        key="additional-skills-name"
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6" component="span">
                            {courses[getPage() - 1].name}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        key="additional-skills-grade"
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="body1" component="span">
                            Grade: {courses[getPage() - 1].grade}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        key="additional-skills-pagination"
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            disabled={getPage() === 1}
                            onClick={() => {
                                setPage(getPage() - 1)
                            }}
                        >
                            {"<button>previous course</button>"}
                        </Button>
                        <Pagination
                            page={getPage()}
                            onChange={(event, page) => setPage(page)}
                            count={courses.length}
                            variant="outlined"
                            size="large"
                            hidePrevButton
                            hideNextButton
                        />
                        <Button
                            disabled={getPage() === courses.length}
                            onClick={() => {
                                setPage(getPage() + 1)
                            }}
                        >
                            {"<button>next course</button>"}
                        </Button>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    )
}

export default Learn
