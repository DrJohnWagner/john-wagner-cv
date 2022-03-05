import React from "react"
import { Button, ButtonGroup, Paper } from "@mui/material"

interface Props {
    label: string
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Footer = (props: Props): JSX.Element => {
    const { label, onClick } = props
    return (
        // <ButtonGroup sx={{ position: "fixed", bottom: 0 }}>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={onClick}>{label}</Button>
            </ButtonGroup>
        </Paper>
    )
}

export default Footer

// import React from "react"
// import { Button, Stack } from "@mui/material"

// interface Props {
//     label: string
//     // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
//     onClick: React.MouseEventHandler<HTMLButtonElement>
// }

// export const Footer = (props: Props): JSX.Element => {
//     const { label, onClick } = props
//     return (
//         <Stack sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
//             <Button onClick={onClick}>{label}</Button>
//         </Stack>
//     )
// }

// export default Footer

// import React from "react"
// import { BottomNavigation, BottomNavigationAction } from "@mui/material"

// interface Props {
//     labels: string[]
//     value: number
//     onChange?: ((event: React.SyntheticEvent<Element, Event>, value: any) => void) | undefined
// }

// export const Footer = (props: Props): JSX.Element => {
//     const { labels, value, onChange } = props
//     return (
//         <BottomNavigation
//             sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
//             showLabels
//             value={value}
//             onChange={onChange}
//         >
//             {labels.map((label) => (
//                 <BottomNavigationAction key={label} label={label} />
//             ))}
//         </BottomNavigation>
//     )
// }
// {
//     /* <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}> */
// }
// {
//     /* </Paper> */
// }

// {
//     /* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
// <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
// <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */
// }
// //
// // experience.slice(0, Math.ceil(experience.length / 2)).map(...)
// // experience.slice(-Math.ceil(experience.length / 2)).map(...)
// //
// // <img src={logo} className="App-logo" alt="logo" />
// // <p>ID: {props.id}</p>
// // <p>
// //  Edit <code>src/App.tsx</code> and save to reload.
// // </p>
// // <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
// //  Learn React
// // </a>

// export default Footer
