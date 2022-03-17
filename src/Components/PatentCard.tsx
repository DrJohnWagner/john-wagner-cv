import React from "react"
import Typography from "@mui/material/Typography"

import StyledCard from "./StyledCard"
import Patent from "../Types/Patent"

const IMAGES = process.env.PUBLIC_URL + "/assets/images/patents"

interface Props {
    patent: Patent
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const PatentCard = (props: Props): JSX.Element => {
    const { patent, onClick } = props
    const { pto, publication, title, inventors, issued } = patent
    return (
        <StyledCard
            avatar={pto}
            title={publication}
            subtitle={issued}
            image={`${IMAGES}/${publication}.png`}
            url={`https://patents.google.com/patent/${publication}`}
            onClick={onClick}
        >
            <Typography gutterBottom variant="subtitle1" component="div">
                {title}
            </Typography>
            <Typography variant="body2" component="div">
                {inventors}
            </Typography>
        </StyledCard>
    )
}

export default PatentCard
