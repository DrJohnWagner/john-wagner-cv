import React, { useRef, MouseEvent } from "react"
import { Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
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
    const theme = useTheme()
    // const [getDelta, setDelta] = useState({ dx: 0, dy: 0 })
    const bgRef = useRef<Background>(null)
    const fgRef = useRef<HTMLDivElement>(null)
    const cells = Array.from(Array(63).keys()).map(() => "")
    TEMPLATE.forEach(({ index, text }) => {
        cells[index] = text
    })
    cells[KEYWORD] = "$" + keyword
    words.forEach((word) => {
        const indices = cells.map((e, i) => (e === "" ? i : -1)).filter((e) => e >= 0)
        cells[indices[getRandomInteger(indices.length)]] = word
    })
    const onMouseMove = (e: MouseEvent) => {
        e.preventDefault()
        if (fgRef.current !== null && bgRef.current !== null) {
            const cx = e.clientX
            const cy = e.clientY
            const cw = fgRef.current.clientWidth / 2
            const ch = fgRef.current.clientHeight / 2
            // bgRef.current.setCwChDxDy({ cw: 2 * cw, ch: 2 * ch, dx: (cx - cw) / cw, dy: (cy - ch) / ch })
            bgRef.current.setCwChDxDy({ cw: 2 * cw, ch: 2 * ch, dx: (cx - cw) / cw, dy: cy / ch })
            // bgRef.current.setCwChDxDy({ cw: 2 * cw, ch: 2 * ch, dx: cx / cw, dy: cy / ch })
            const element = fgRef.current
            element.addEventListener("resize", (event) => console.log(event.detail))
        }
    }
    return (
        <>
            <Background color={theme.palette.secondary.main} ref={bgRef} />
            <div onMouseMove={onMouseMove} style={{ position: "relative" }} ref={fgRef}>
                <Grid container columns={14} spacing={2} justifyContent="center">
                    {cells.map((cell, index) => createCell(cell, index + cell))}
                </Grid>
            </div>
        </>
    )
}

export default IAmJohn
