import Breakpoints from "../Types/Breakpoints"

const getBreakpoints = (breakpoints: Breakpoints) => {
    const xs = breakpoints.xs || false
    const sm = breakpoints.sm || false
    const md = breakpoints.md || false
    const lg = breakpoints.lg || false
    const xl = breakpoints.xl || false
    return { xs, sm, md, lg, xl }
}

export default getBreakpoints
