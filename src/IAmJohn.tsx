import React from "react"
import { Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import TypingEffect from "new-react-typing-effect"
import Background from "./Components/Background"

const KEYWORD = 38
const TEMPLATE = [
    { index: 9, text: "i" },
    { index: 14, text: "am" },
    { index: 22, text: "john" },
    { index: 33, text: "i" },
    { index: 38, text: "am" },
    { index: 48, text: "many" },
    { index: 53, text: "things" },
]

interface Props {
    words: string[]
    keyword: string
}

const getRandomInteger = (maximum: number) => {
    return Math.floor(Math.random() * maximum)
}

const createCell = (text: string, key: string) => {
    if (text.startsWith("#")) {
        return (
            <Grid
                item
                container
                xs={2}
                key={key}
                sx={{ minHeight: 50 }}
                style={{ padding: "0 0 0 0" }}
                alignItems="center"
                justifyContent="center"
            >
                <TypingEffect
                    messages={["", text]}
                    cursor="|"
                    textRenderer={(text, renderedCursor) => {
                        return (
                            <Typography variant="body1" component="span">
                                {text}
                                {text === "" ? "" : renderedCursor}
                            </Typography>
                        )
                    }}
                    options={{
                        text: {
                            charactersPerSecond: 5,
                            emptyTextDelayMS: getRandomInteger(5000),
                            fullTextDelayMS: 1500 + getRandomInteger(2000),
                        },
                    }}
                />
            </Grid>
        )
    }
    return (
        <Grid
            item
            container
            xs={2}
            key={key}
            sx={{ minHeight: 50 }}
            style={{ padding: "0 0 0 0" }}
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="h3" component="span" style={{ textShadow: "1px 1px 3px" }}>
                {text.startsWith("$") ? "#" + text.slice(1) : text}
            </Typography>
        </Grid>
    )
}

export const IAmJohn = (props: Props): JSX.Element => {
    const { words, keyword } = props
    const cells = Array.from(Array(63).keys()).map(() => "")
    TEMPLATE.forEach(({ index, text }) => {
        cells[index] = text
    })
    cells[KEYWORD] = "$" + keyword
    words.forEach((word) => {
        const indices = cells.map((e, i) => (e === "" ? i : -1)).filter((e) => e >= 0)
        cells[indices[getRandomInteger(indices.length)]] = word
    })
    return (
        <>
            <Background />
            <div
                style={{
                    // backgroundColor: "yellow",
                    pointerEvents: "none",
                    position: "absolute",
                    top: 50,
                    bottom: 46,
                    left: 0,
                    right: 0,
                }}
            >
                <Grid container columns={14} spacing={2} justifyContent="center">
                    <Grid item xs={14} />
                    {cells.map((cell, index) => createCell(cell, index + cell))}
                </Grid>
            </div>
        </>
    )
}

export default IAmJohn
