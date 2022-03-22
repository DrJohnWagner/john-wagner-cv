import React, { useRef, useEffect, MouseEvent } from "react"
// import { Box } from "@mui/material"
//
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import useState from "../Functions/useState"

// https://stackoverflow.com/questions/69506133/difference-between-mui-material-styles-and-mui-styles

function getColor(color: string, amount = 0) {
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
    return { r, g, b }
}

function LightenDarkenColor(color: string, amount: number) {
    const usePound = color[0] === "#"
    const { r, g, b } = getColor(color, amount)
    // const num = parseInt(color[0] === "#" ? color.slice(1) : color, 16)

    // let r = (num >> 16) + amount
    // if (r > 255) r = 255
    // else if (r < 0) r = 0

    // let b = ((num >> 8) & 0x00ff) + amount
    // if (b > 255) b = 255
    // else if (b < 0) b = 0

    // let g = (num & 0x0000ff) + amount
    // if (g > 255) g = 255
    // else if (g < 0) g = 0

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}

const RisingMoon = ({ distance, radius, fill }: { distance: number; radius: number; fill: string }) => {
    const theme = useTheme()
    const xs = useMediaQuery(theme.breakpoints.only("xs"))
    const sm = useMediaQuery(theme.breakpoints.only("sm"))
    const md = useMediaQuery(theme.breakpoints.only("md"))
    const rate = xs ? 250 : sm ? 150 : md ? 140 : 150
    return <circle cx={270 + 40 * distance} cy={120 + radius - 1.8 * rate * distance} r={radius} fill={fill} />
}

const Ridge = ({ fill }: { fill: string }) => {
    return (
        <path
            d="M93.8172109,98.5978889 C93.2857282,98.5978889 92.7462382,98.4418889 92.2728082,98.1188889 C91.0116627,97.2688889 90.6833645,95.5558889 91.5351382,94.2948889 C107.587718,70.6348889 159.454827,56.4958889 200.327951,56.4958889 L202.20966,56.4958889 L203.908203,55.6828889 C243.828461,36.5228889 296.166998,25.9708889 351.276052,25.9708889 C389.592854,25.9708889 426.467345,31.1318889 449.91264,39.7768889 L453.686067,41.1678889 L457.110177,39.0628889 C489.901961,18.9148889 547.812559,8.26288893 624.582286,8.26288893 C654.694636,8.26288893 687.358304,9.97788893 719.043082,13.2228889 C783.239389,19.7988889 869.79,39.8268889 927.063019,53.0788889 C947.789845,57.8738889 964.00257,61.6258889 974.024673,63.5508889 C975.51903,63.8378889 976.500922,65.2818889 976.21266,66.7768889 C975.922396,68.2718889 974.459067,69.2368889 972.983727,68.9608889 C962.862535,67.0168889 946.603767,63.2558889 926.016068,58.4918889 C868.678991,45.2248889 782.331565,25.2428889 718.477568,18.7038889 C686.978959,15.4788889 654.510469,13.7728889 624.581285,13.7728889 C548.831485,13.7728889 491.920795,24.1398889 459.999802,43.7558889 L455.429651,46.5608889 C454.709997,47.0048889 453.8322,47.0948889 453.031473,46.7988889 L448.004907,44.9438889 C425.136136,36.5138889 388.977295,31.4808889 351.275051,31.4808889 C296.975733,31.4808889 245.486967,41.8378889 206.292368,60.6478889 L204.029313,61.7338889 C203.658976,61.9138889 203.250605,62.0058889 202.83723,62.0058889 L200.325949,62.0058889 C160.892133,62.0058889 111.122929,75.2408889 96.0972818,97.3878889 C95.5678009,98.1728889 94.7010136,98.5978889 93.8172109,98.5978889 Z"
            id="Path"
            fill={fill}
        />
    )
}

const Uluru = ({ fill }: { fill: string }) => {
    return (
        <path
            d="M0,217.552889 C0,217.552889 65.1451691,118.482889 84.68892,89.6618889 C104.236675,60.8448889 162.868928,48.2328889 200.327951,48.2328889 C286.651355,6.80288893 403.917865,14.0088889 452.777242,32.0228889 C511.409495,-4.00211107 631.930961,-4.00211107 719.884846,5.00188893 C807.830725,14.0098889 938.131072,48.2328889 975.588093,55.4378889 C1013.04912,62.6448889 1009.79116,95.0678889 1035.85083,127.491889 C1061.90849,159.916889 1101,221.158889 1101,221.158889 L921.025535,220.256889 L924.281493,235.567889 C924.281493,235.567889 798.062853,269.791889 695.449653,229.264889 C672.645941,228.365889 422.646875,229.264889 344.46987,229.264889 C266.290863,229.264889 184.045162,229.264889 162.868928,229.264889 C141.695697,229.264889 127.850122,224.760889 118.890985,220.256889 C65.1451691,220.255889 0,217.552889 0,217.552889 Z"
            id="Path"
            fill={fill}
        />
    )
}

const Shadows = ({ fill }: { fill: string }) => {
    // const theme = useTheme()
    // // const color = theme.palette.text.primary
    // const color = theme.palette.primary.main
    return (
        <g id="Group" transform="translate(-0.000000, 50.923814)" fill={fill}>
            <path
                d="M318.969709,178.339075 L395.771465,43.2390751 C395.771465,43.2390751 337.142215,29.7320751 311.895284,76.5660751 C294.922868,108.056075 272.806781,152.544075 260.131268,178.339075 C278.803227,178.339075 298.782374,178.339075 318.969709,178.339075 Z"
                id="Path"
            />
            <path
                d="M28.7481109,167.657075 C35.4291791,151.142075 43.1612018,132.341075 49.4048727,117.997075 C57.9826636,98.2910751 78.5843755,57.7610751 93.4338627,28.9810751 C90.0257673,32.0000751 87.0600736,35.2480751 84.6899209,38.7380751 C65.1451691,67.5580751 5.68950947e-14,166.629075 5.68950947e-14,166.629075 C5.68950947e-14,166.629075 11.4814282,167.107075 28.7481109,167.657075 Z"
                id="Path"
            />
            <path
                d="M667.761505,54.0490751 C643.304291,87.2500751 607.092401,144.769075 586.565757,177.950075 C641.925038,177.908075 686.437467,177.981075 695.449653,178.339075 C701.650285,180.787075 707.938996,182.948075 714.27375,184.879075 L776.069877,1.81107507 C776.069877,1.81107507 703.598054,5.41507507 667.761505,54.0490751 Z"
                id="Path"
            />
            <path
                d="M132.591428,174.542075 L195.445516,48.6480751 C195.445516,48.6480751 165.314149,48.6480751 145.765394,87.3720751 C133.392155,111.901075 115.139577,146.893075 103.413927,169.268075 C108.629665,169.310075 113.816375,169.332075 118.891985,169.332075 C122.56332,171.175075 127.114454,173.006075 132.591428,174.542075 Z"
                id="Path"
            />
            <path
                d="M921.025535,169.332075 L952.093754,169.489075 C942.848356,145.628075 928.088951,107.042075 921.622077,87.3720751 C911.850202,57.6540751 886.009732,33.3340751 859.136324,30.6320751 L922.903241,178.171075 L921.025535,169.332075 Z"
                id="Path"
            />
            <path
                d="M583.885323,16.2250751 C575.491699,29.7890751 523.604572,135.040075 502.467374,178.067075 C514.437245,178.046075 526.438145,178.025075 538.286907,178.004075 L627.861265,0.00807506698 C627.861265,0.00807506698 594.472939,-0.888924933 583.885323,16.2250751 Z"
                id="Path"
            />
            <path
                d="M434.859968,62.1560751 C418.733321,87.5410751 380.889949,149.989075 363.767397,178.323075 C372.773577,178.315075 382.917791,178.299075 393.928792,178.276075 L486.98331,27.9320751 C486.98331,27.9320751 456.0342,28.8330751 434.859968,62.1560751 Z"
                id="Path"
            />
        </g>
    )
}

interface State {
    cw: number
    ch: number
    dx: number
    dy: number
}
const Background = () => {
    const theme = useTheme()
    const [getState, setState] = useState<State>({ cw: 0, ch: 0, dx: 0, dy: 0 }) //topics[0])
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref != null && ref.current != null) {
            const { dx, dy } = getState()
            const cw = ref.current.clientWidth
            const ch = ref.current.clientHeight
            setState({ cw: cw, ch: ch, dx: dx, dy: dy })
        }
    }, [])
    const onMouseMove = (e: MouseEvent) => {
        e.preventDefault()
        if (ref != null && ref.current != null) {
            const cx = e.clientX
            const cy = e.clientY
            const cw = ref.current.clientWidth
            const ch = ref.current.clientHeight
            setState({ cw: cw, ch: ch, dx: (cx - cw) / cw, dy: cy / ch })
        }
    }
    const xs = useMediaQuery(theme.breakpoints.only("xs"))
    const { cw, ch, dx, dy } = getState()
    const distance = dx * dx + dy * dy
    const radius = 160 - dy * 40
    const points = [
        [0, 200],
        [0, xs ? ch + 212 : ch],
        [1500, xs ? ch + 212 : ch],
        [1500, 180],
        [0, 180],
    ]
        .map((corner) => corner[0] + "," + corner[1])
        .join(" ")
    return (
        <div
            style={{
                position: "absolute",
                top: 50,
                bottom: 46,
                left: 0,
                right: 0,
            }}
            onMouseMove={onMouseMove}
            ref={ref}
        >
            {cw + ch > 0 && (
                <svg
                    width="100%" // 1101px"
                    height="100%" //"250px"
                    // viewBox="0 0 1101 200"
                    viewBox="0 0 1201 100"
                    version="1.1"
                >
                    <defs>
                        <linearGradient
                            id="linear-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="400"
                            x2="0"
                            y2="0"
                        >
                            <stop offset="0%" stopColor={theme.palette.secondary.main} stopOpacity="0%" />
                            <stop offset="100%" stopColor={theme.palette.secondary.main} stopOpacity="100%" />
                        </linearGradient>
                    </defs>
                    <RisingMoon distance={distance} radius={radius} fill={"#F4F6F0"} />
                    <polyline points={points} fill={theme.palette.primary.main} stroke={"#00000000"} strokeWidth={1} />
                    <polyline points={points} fill="url(#linear-gradient)" stroke={"#00000000"} strokeWidth={1} />
                    <g id="MovingMountains" transform="scale(0.5, 0.5) translate(100, 200)">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="uluru-ayers-rock-by-Vexels" fillRule="nonzero">
                                <Uluru fill={LightenDarkenColor(theme.palette.secondary.main, -50)} />
                                <Ridge fill={theme.palette.background.default} />
                                <Shadows fill={theme.palette.primary.main} />
                            </g>
                        </g>
                    </g>
                </svg>
            )}
        </div>
    )
}
export default Background
