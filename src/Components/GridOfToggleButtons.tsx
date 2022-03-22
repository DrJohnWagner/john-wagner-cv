import React from "react"
import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material"
// import Typography from "@mui/material/Typography"
import getHashtag from "../Functions/getHashtag"

interface Props {
    values: string[]
    value: string | null
    spacing?: number
    onChange?: ((event: React.SyntheticEvent<Element, Event>, value: any) => void) | undefined
}

const GridOfToggleButtons = (props: Props): JSX.Element => {
    const { values, value, onChange } = props
    const spacing = props.spacing || 0
    return (
        <Box style={{ textAlign: "center" }}>
            <Grid container spacing={spacing}>
                <Grid item key="toggle-button-group" xs={12}>
                    <ToggleButtonGroup color="primary" exclusive value={value} onChange={onChange}>
                        {values.map((s) => (
                            <ToggleButton
                                sx={{
                                    color: (theme) => theme.palette.text.primary + "CC",
                                    border: "1px solid",
                                    borderColor: (theme) => theme.palette.primary.main + "88",
                                }}
                                key={s}
                                value={s}
                            >
                                {s.slice(0, 1) !== "#" ? getHashtag(s) : s}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </Box>
    )
}

export default GridOfToggleButtons

// import React from "react"
// import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material"
// // import Typography from "@mui/material/Typography"

// import getHashtag from "../Functions/getHashtag"

// interface Props {
//     values: string[] | number[]
//     value: string | number | null
//     spacing?: number
//     onChange?: ((event: React.SyntheticEvent<Element, Event>, value: any) => void) | undefined
// }

// const GridOfToggleButtons = (props: Props): JSX.Element => {
//     const { values, value, onChange } = props
//     const spacing = props.spacing || 0
//     return (
//         <Box style={{ textAlign: "center" }}>
//             <Grid container spacing={spacing}>
//                 <Grid item key="toggle-button-group" xs={12}>
//                     <ToggleButtonGroup exclusive value={value} onChange={onChange}>
//                         {values.map((s) => (
//                             <ToggleButton key={s} value={s}>
//                                 {getHashtag(s)}
//                             </ToggleButton>
//                         ))}
//                     </ToggleButtonGroup>
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }

// export default GridOfToggleButtons
