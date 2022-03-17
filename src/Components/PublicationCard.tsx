import React from "react"
import Typography from "@mui/material/Typography"

import StyledCard from "./StyledCard"
import Publication from "../Types/Publication"

const IMAGES = process.env.PUBLIC_URL + "/assets/images/publications"

interface Props {
    publication: Publication
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const PublicationCard = (props: Props): JSX.Element => {
    const { publication, onClick } = props
    const { key, authors, title, journal, volume, year, url } = publication
    return (
        <StyledCard
            avatar={"'" + new Number(year).toString().slice(2)}
            title={journal}
            image={`${IMAGES}/${key}.png`}
            url={url}
            onClick={onClick}
        >
            <Typography gutterBottom variant="subtitle1" component="div">
                {title}
            </Typography>
            <Typography variant="body2" component="div">
                {authors}
            </Typography>
            <Typography variant="body2" component="div">
                {journal} {volume}
            </Typography>
        </StyledCard>
    )
}

export default PublicationCard
