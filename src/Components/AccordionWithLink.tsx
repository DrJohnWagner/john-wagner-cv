import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Link, Typography } from "@mui/material"

interface Props {
    key: string
    summary: string
    details: string[]
    linkURL?: string
    linkText: string
    expanded: boolean
    onChange?: ((event: React.SyntheticEvent<Element, Event>, expanded: boolean) => void) | undefined
}

const AccordionWithLink = (props: Props) => {
    const { key, summary, details, linkURL, linkText, expanded, onChange } = props
    return (
        <Accordion elevation={0} key={key} expanded={expanded} onChange={onChange}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {details.map((detail) => (
                    <Typography key={detail} display="block">
                        {detail}
                    </Typography>
                ))}
                <Link
                    component="button"
                    variant="body1"
                    onClick={() => {
                        window.open(linkURL, "_blank")
                    }}
                >
                    {linkText}
                </Link>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionWithLink
