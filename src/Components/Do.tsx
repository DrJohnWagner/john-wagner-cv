import React from "react"
import { Grid, Collapse, Tooltip } from "@mui/material"

import GridOfToggleButtons from "./GridOfToggleButtons"
import CaptionedImage from "./CaptionedImage"
import Timeline from "./Timeline"

import useState from "../Functions/useState"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import images from "../Images"
import professionalExperience from "../CV/ProfessionalExperience"
import keywords from "../CV/Keywords"

// const IMAGES = process.env.PUBLIC_URL + "/assets/images"

interface Props {
    sayMore: boolean
}

export const Do = (props: Props): JSX.Element => {
    const { sayMore } = props
    const labels = Array.from(new Set(professionalExperience.map((role) => role.label)))
    const [getLabel, setLabel] = useState<string | null>(null) //labels[0])
    const onLabel = (event: any, label: string | null) => {
        setLabel(label)
    }
    const image = images.get(getLabel() || "")
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={keywords.do} keyword="do" />
            </Collapse>
            <Collapse in={!sayMore}>
                <GridOfToggleButtons values={labels} value={getLabel()} spacing={2} onChange={onLabel} />
                <Timeline
                    timeline={professionalExperience
                        .filter((role) => getLabel() == null || role.label === getLabel())
                        .sort((a, b) => (a.from > b.from ? -1 : 1))
                        .map(({ from, to, title, organisation, duties, bullets }) => {
                            return {
                                from,
                                to,
                                title,
                                subtitle: organisation,
                                description: duties,
                                bullets,
                            }
                        })}
                    xs={3}
                    md={2}
                />
                <Grid container spacing={2}>
                    {image && <Grid item xs={12} />}
                    {image && <Grid item xs={12} />}
                    {image && (
                        <Grid container item spacing={2} xs={12} justifyContent="center" alignItems="center">
                            <Tooltip title={image.credit}>
                                <CaptionedImage image={getLabel() || ""} width={"50%"} margin="8px 24px" />
                            </Tooltip>
                        </Grid>
                    )}
                </Grid>
            </Collapse>
        </>
    )
}

export default Do
