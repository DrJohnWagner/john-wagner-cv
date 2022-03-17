import React from "react"
// import { Box } from "@mui/material"
// import { Theme } from "@mui/material/styles"
//
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

// https://stackoverflow.com/questions/69506133/difference-between-mui-material-styles-and-mui-styles

function LightenDarkenColor(color: string, amount: number) {
    const usePound = color[0] === "#"
    const num = parseInt(color[0] === "#" ? color.slice(1) : color, 16)

    let r = (num >> 16) + amount
    if (r > 255) r = 255
    else if (r < 0) r = 0

    let b = ((num >> 8) & 0x00ff) + amount
    if (b > 255) b = 255
    else if (b < 0) b = 0

    let g = (num & 0x0000ff) + amount
    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}

const RisingSun = ({ distance, fill }: { distance: number; fill: string }) => {
    const theme = useTheme()
    const xs = useMediaQuery(theme.breakpoints.only("xs"))
    const sm = useMediaQuery(theme.breakpoints.only("sm"))
    const md = useMediaQuery(theme.breakpoints.only("md"))
    const rate = xs ? 290 : sm ? 190 : md ? 140 : 90
    return <circle cx={600 + 80 * distance} cy={500 - rate * distance} r="50" fill={fill} />
}

interface Props {
    margin?: string
    color?: string
}
interface State {
    cw: number
    ch: number
    dx: number
    dy: number
}
class Background extends React.Component<Props, State> {
    state: State = {
        cw: 0,
        ch: 0,
        dx: 0,
        dy: 0,
    }
    render() {
        const color = this.props.color || "#000000"
        const fillA = LightenDarkenColor(color, -10) // "#BF5D1B"
        const fillB = color // "#D86D25"
        const fillC = LightenDarkenColor(color, -25) // "#9B4B15"
        const fillD = LightenDarkenColor(color, -35) // "#9B4B15"
        const fillE = LightenDarkenColor(color, -20) // "#9B4B15"
        const { dx, dy } = this.state
        const distance = dx * dx + dy * dy
        const corners = [
            [0, 750],
            [0, 650],
            [2200, 650],
            [2200, 750],
            [0, 750],
        ]
        const points = corners.map((corner) => corner[0] + "," + corner[1]).join(" ")
        // console.log(this.state.cw, this.state.ch)
        return (
            <div
                onMouseMove={() => console.log("MOVED")}
                // style={{
                //     position: "absolute",
                //     margin: this.props.margin || "-24px",
                // }}
                style={{
                    position: "fixed",
                    margin: this.props.margin || "-24px",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <svg
                    version="1.1"
                    id="Capa_1"
                    // xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="100%"
                    // width={`${this.state.cw}px`}
                    // width="1200px"
                    height="1200px"
                    // height="500px"
                    // height={`${this.state.ch}px`}
                    // viewBox="0 0 1200 1200"
                    viewBox="0 150 2200 1200"
                    // enableBackground="new 0 0 1200 1200"
                    xmlSpace="preserve"
                >
                    <RisingSun distance={distance} fill={fillD} />
                    <polyline points={points} fill={fillE} stroke={"#00000000"} strokeWidth={1} />
                    <g>
                        <path
                            // fill="#BF5D1B"
                            fill={fillA}
                            d="M50,693.019c0,0,65.086-99.07,84.612-127.891c19.53-28.817,78.109-41.429,115.534-41.429
		c86.245-41.43,203.405-34.224,252.22-16.21c58.579-36.025,178.991-36.025,266.865-27.021
		c87.866,9.008,218.048,43.231,255.471,50.436c37.427,7.207,34.172,39.63,60.208,72.054c26.034,32.425,65.09,93.667,65.09,93.667
		l-179.811-0.902l3.253,15.311c0,0-126.104,34.224-228.624-6.303c-22.783-0.899-272.555,0-350.661,0c-78.108,0-160.279,0-181.436,0
		c-21.154,0-34.987-4.504-43.938-9.008C115.086,695.722,50,693.019,50,693.019z"
                        />
                        <g>
                            <path
                                // fill="#D86D25"
                                fill={fillB}
                                d="M143.732,574.064c-0.531,0-1.07-0.156-1.543-0.479c-1.26-0.85-1.588-2.563-0.737-3.824
			c16.038-23.66,67.858-37.799,108.694-37.799h1.88l1.697-0.813c39.884-19.16,92.175-29.712,147.234-29.712
			c38.282,0,75.123,5.161,98.547,13.806l3.77,1.391l3.421-2.105c32.762-20.148,90.62-30.8,167.32-30.8
			c30.085,0,62.719,1.715,94.375,4.96c64.138,6.576,150.61,26.604,207.831,39.856c20.708,4.795,36.906,8.547,46.919,10.472
			c1.493,0.287,2.474,1.731,2.186,3.226c-0.29,1.495-1.752,2.46-3.226,2.184c-10.112-1.944-26.356-5.705-46.925-10.469
			c-57.285-13.267-143.554-33.249-207.35-39.788c-31.47-3.225-63.909-4.931-93.811-4.931c-75.681,0-132.54,10.367-164.432,29.983
			l-4.566,2.805c-0.719,0.444-1.596,0.534-2.396,0.238l-5.022-1.855c-22.848-8.43-58.974-13.463-96.642-13.463
			c-54.25,0-105.692,10.357-144.851,29.167l-2.261,1.086c-0.37,0.18-0.778,0.272-1.191,0.272h-2.509
			c-39.398,0-89.122,13.235-104.134,35.382C145.481,573.639,144.615,574.064,143.732,574.064z"
                            />
                        </g>
                        <g>
                            <path
                                // fill="#9B4B15"
                                fill={fillC}
                                d="M368.68,704.729l76.732-135.1c0,0-58.576-13.507-83.8,33.327c-16.957,31.49-39.053,75.978-51.717,101.772
			C328.55,704.729,348.511,704.729,368.68,704.729z"
                            />
                            <path
                                // fill="#9B4B15"
                                fill={fillC}
                                d="M78.722,694.047c6.675-16.515,14.4-35.316,20.638-49.66c8.57-19.706,29.153-60.236,43.989-89.016
			c-3.405,3.019-6.368,6.267-8.736,9.757C115.086,593.948,50,693.019,50,693.019S61.471,693.497,78.722,694.047z"
                            />
                            <path
                                // fill="#9B4B15"
                                fill={fillC}
                                d="M717.155,580.439c-24.435,33.201-60.614,90.72-81.122,123.901c55.309-0.042,99.781,0.031,108.785,0.389
			c6.195,2.448,12.478,4.609,18.807,6.54l61.74-183.068C825.365,528.201,752.959,531.805,717.155,580.439z"
                            />
                            <path
                                // fill="#9B4B15"
                                fill={fillC}
                                d="M182.471,700.932l62.797-125.894c0,0-30.104,0-49.635,38.724c-12.362,24.529-30.598,59.521-42.313,81.896
			c5.211,0.042,10.393,0.064,15.464,0.064C172.452,697.565,176.999,699.396,182.471,700.932z"
                            />
                            <path
                                // fill="#9B4B15"
                                fill={fillC}
                                d="M970.189,695.722l31.04,0.157c-9.237-23.861-23.983-62.447-30.444-82.117
			c-9.763-29.718-35.58-54.038-62.429-56.74l63.709,147.539L970.189,695.722z"
                            />
                            <path
                                // fill="#9B4B15"
                                fill={fillC}
                                d="M633.355,542.615c-8.386,13.564-60.226,118.815-81.344,161.842c11.959-0.021,23.949-0.042,35.787-0.063
			l89.493-177.996C677.292,526.398,643.933,525.501,633.355,542.615z"
                            />
                            <path
                                // fill="#9B4B15"
                                fill={fillC}
                                d="M484.465,588.546c-16.112,25.385-53.921,87.833-71.028,116.167c8.998-0.008,19.133-0.024,30.134-0.047
			l92.97-150.344C536.54,554.322,505.62,555.223,484.465,588.546z"
                            />
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
    setCwCh = ({ cw, ch }: { cw: number; ch: number; dx: number; dy: number }) => {
        this.setState({
            cw: cw,
            ch: ch,
            dx: this.state.dx,
            dy: this.state.dy,
        })
    }
    setCwChDxDy = ({ cw, ch, dx, dy }: { cw: number; ch: number; dx: number; dy: number }) => {
        this.setState({
            cw: cw,
            ch: ch,
            dx: dx,
            dy: dy,
        })
    }
}
export default Background
