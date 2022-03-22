import React from "react"
import { Box } from "@mui/material"
import Typography, { TypographyTypeMap } from "@mui/material/Typography"

import images from "../Images"

const IMAGES = process.env.PUBLIC_URL + "/assets/images"

interface Props {
    image: string
    variant?: TypographyTypeMap["props"]["variant"]
    width?: string
    margin?: string
}
const CaptionedImage = (props: Props) => {
    const image = images.get(props.image)
    const variant = props.variant || "body1"
    const width = props.width || "100%"
    const margin = props.margin || "8px 0px 0px 0px"
    return image ? (
        <Box sx={{ width: width, margin: margin, textAlign: "center" }}>
            <img style={{ border: "1px solid" }} width="100%" src={`${IMAGES}/${image.filename}`} />
            <Typography variant={variant} component="div">
                {image.caption}
            </Typography>
        </Box>
    ) : (
        <Typography variant={variant} sx={{ margin: margin }}>
            Image not found.
        </Typography>
    )
}

export default CaptionedImage
