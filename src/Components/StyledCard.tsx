import React from "react"
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material"
import Avatar from "@mui/material/Avatar"

// import { useTheme } from "@mui/material/styles"
import useState from "../Functions/useState"

interface Props {
    avatar: string
    title: string
    subtitle?: string
    image: string
    url?: string
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const StyledCard = (props: Props): JSX.Element => {
    const { avatar, title, subtitle, image, url, children, onClick } = props
    // const theme = useTheme()
    const [getElevation, setElevation] = useState<number>(1)
    // const [getElevation] = useState<number>(1)
    return (
        <Card
            elevation={getElevation()}
            onMouseEnter={() => setElevation(10)}
            onMouseLeave={() => setElevation(1)}
            sx={{ borderRadius: 2 }}
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
            <CardHeader avatar={<Avatar aria-label="recipe">{avatar}</Avatar>} title={title} subheader={subtitle} />
            <CardActionArea onClick={onClick}>
                <CardMedia
                    // style={{
                    //     border: "5px",
                    //     borderColor: theme.palette.primary.main,
                    // }}
                    sx={{
                        // border: "5px",
                        // borderColor: theme.palette.primary.main,
                        marginLeft: "10%",
                        width: "80%",
                        backgroundColor: "#FFFFFF",
                    }}
                    component="img"
                    image={image}
                    alt="Patent image"
                />
            </CardActionArea>
            <CardContent>{children}</CardContent>
            <CardActions sx={{ paddingTop: "0px", marginTop: "auto" }}>
                <Button
                    disabled={url == null}
                    onClick={() => {
                        window.open(url, "_blank")
                    }}
                    style={{ padding: "0px", fontSize: "1em" }}
                >
                    {"<link>see more things</link>"}
                </Button>
            </CardActions>
        </Card>
    )
}

export default StyledCard
