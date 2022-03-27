import React from "react"
import { Grid, Collapse } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

import GridOfToggleButtons from "./GridOfToggleButtons"
import PublicationOrPatentDialog from "./PublicationOrPatentDialog"
import PublicationCard from "./PublicationCard"
import PatentCard from "./PatentCard"
import Range from "../Classes/Range"
import useState from "../Functions/useState"

import IAmJohn from "../IAmJohn"
import patents from "../CV/Patents"
import publications from "../CV/Publications"
import keywords from "../CV/Keywords"

import Patent from "../Types/Patent"
import Publication from "../Types/Publication"

type PublicationOrPatent = Patent | Publication
type PublicationOrPatentArray = Array<PublicationOrPatent>
const isPatent = (publicationOrPatent: any): publicationOrPatent is Patent => {
    return publicationOrPatent.pto !== undefined
}

const publicationsAndPatents: PublicationOrPatentArray = ([] as PublicationOrPatentArray)
    .concat(publications, patents)
    .sort((a, b) => (a.year > b.year ? -1 : +1))

const IMAGES = process.env.PUBLIC_URL + "/assets/images"

interface Props {
    sayMore: boolean
}

const Invent = (props: Props): JSX.Element => {
    const { sayMore } = props
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
    //
    const cutoff = useMediaQuery(theme.breakpoints.up("lg")) ? 2015 : 2025
    const years = Array.from(
        new Set(publicationsAndPatents.map((publicationOrPatent) => publicationOrPatent.year))
    ).sort((a, b) => (a > b ? -1 : +1))
    const ranges = years
        .filter((n) => n >= cutoff)
        .map((n) => new Range(n, n + 1))
        .concat(cutoff > 2025 ? [new Range(2025, 2030)] : [])
        .concat(cutoff > 2020 ? [new Range(2020, 2025)] : [])
        .concat(cutoff > 2015 ? [new Range(2015, 2020)] : [])
        .concat([new Range(2010, 2015), new Range(2005, 2010), new Range(2000, 2005), new Range(1990, 2000)])
    //
    const [getRange, setRange] = useState<Range | null>(null) //Years[0])
    const [getPublication, setPublication] = useState<Publication | null>(null)
    const [getPatent, setPatent] = useState<Patent | null>(null)
    const onRange = (event: any, value: string | null) => {
        if (value == null) {
            setRange(value)
        } else {
            ranges.forEach((range) => {
                if (range.toString() === value.toString()) {
                    setRange(range)
                }
            })
        }
    }
    const onClose = () => {
        setPublication(null)
        setPatent(null)
    }
    const getPublicationSummary = (field: "title" | "authors" | "published") => {
        const publication = getPublication()
        if (publication != null && field === "title") {
            return publication.title
        } else if (publication != null && field === "authors") {
            return publication.authors
        } else if (publication != null) {
            const { journal, volume } = publication
            return `${journal} ${volume}`
        }
        return ""
    }
    const getPatentSummary = (field: "title" | "inventors" | "issued") => {
        const patent = getPatent()
        if (patent != null && field === "title") {
            return patent.title
        } else if (patent != null && field === "inventors") {
            return patent.inventors
        } else if (patent != null) {
            const { pto, publication, issued } = patent
            return `Issued by ${pto}PTO as ${publication} on ${issued}`
        }
        return ""
    }
    const getPatentPublication = () => {
        const patent = getPatent()
        return patent?.publication
    }
    const getKey = () => {
        const publication = getPublication()
        return publication?.key
    }
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={keywords.create.filter(() => Math.random() < 0.4)} keyword="create" />
            </Collapse>
            <Collapse in={!sayMore}>
                <GridOfToggleButtons
                    values={ranges.map((range) => range.toString())}
                    value={getRange()?.toString() || null}
                    spacing={2}
                    onChange={onRange}
                />
                <Grid container spacing={2}>
                    <Grid item key="spacing" xs={12} />
                    {publicationsAndPatents
                        .filter(
                            (publicationOrPatent) =>
                                getRange() === null || getRange()?.getInRange(publicationOrPatent.year)
                        )
                        .map((publicationOrPatent) =>
                            isPatent(publicationOrPatent) ? (
                                <Grid key={publicationOrPatent.publication} item xs={12} sm={6} md={4} lg={3}>
                                    <PatentCard
                                        patent={publicationOrPatent as Patent}
                                        onClick={() => setPatent(publicationOrPatent as Patent)}
                                    />
                                </Grid>
                            ) : (
                                <Grid key={publicationOrPatent.key} item xs={12} sm={6} md={4} lg={3}>
                                    <PublicationCard
                                        publication={publicationOrPatent as Publication}
                                        onClick={() => setPublication(publicationOrPatent as Publication)}
                                    />
                                </Grid>
                            )
                        )}
                </Grid>
            </Collapse>
            <PublicationOrPatentDialog
                title={getPublicationSummary("title")}
                subtitle={getPublicationSummary("authors")}
                description={getPublicationSummary("published")}
                src={`${IMAGES}/publications/${getKey()}.png`}
                open={getPublication() != null}
                fullScreen={fullScreen}
                onClose={onClose}
            />
            <PublicationOrPatentDialog
                title={getPatentSummary("title")}
                subtitle={getPatentSummary("inventors")}
                description={getPatentSummary("issued")}
                src={`${IMAGES}/patents/${getPatentPublication()}.png`}
                open={getPatent() != null}
                fullScreen={fullScreen}
                onClose={onClose}
            />
        </>
    )
}

export default Invent
