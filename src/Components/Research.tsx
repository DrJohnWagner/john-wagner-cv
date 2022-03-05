import React from "react"
import { Grid, Collapse } from "@mui/material"
import Typography from "@mui/material/Typography"

import GridOfToggleButtons from "./GridOfToggleButtons"
import useState from "../Functions/useState"

import IAmJohn from "../IAmJohn"
import publications from "../CV/Publications"
import data from "../Data"

interface Props {
    sayMore: boolean
}

export const Research = (props: Props): JSX.Element => {
    const { sayMore } = props
    const topics = Array.from(
        new Set(publications.map((publication) => publication.topics.map((topic) => topic)).flat())
    )
    const [getTopic, setTopic] = useState(topics[0])
    const onTopic = (event: any, topic: string) => {
        setTopic(topic)
    }
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={data.research} keyword="research" />
            </Collapse>
            <Collapse in={!sayMore}>
                <GridOfToggleButtons strings={topics} value={getTopic()} spacing={2} onChange={onTopic} />
                <Grid container spacing={2}>
                    {publications
                        .filter((publication) => publication.topics.includes(getTopic()))
                        .sort((a, b) => (a.year < b.year ? 1 : -1))
                        .map((publication) => (
                            <Grid
                                item
                                key={publication.title + publication.authors + publication.journal}
                                xs={12}
                                md={6}
                            >
                                <Typography variant="body1" component="span">
                                    {publication.title}.
                                    <br />
                                    {publication.authors}.
                                    <br />
                                    {publication.journal}
                                </Typography>
                            </Grid>
                        ))}
                </Grid>
            </Collapse>
        </>
    )
}

export default Research
