import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material/"

import Main from "./Containers/Main"

import "./App.css"
import theme from "./Theme"

// import Dialog from "@mui/material/Dialog"
// <SimpleDialog />
// const SimpleDialog = () => {
//     const [open, setOpen] = React.useState(true)
//     setTimeout(() => {
//         setOpen(false)
//     }, 1000)
//     return (
//         <Dialog fullScreen open={open}>
//             <Home />
//         </Dialog>
//     )
// }

const App = (): JSX.Element => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Main />
            </ThemeProvider>
        </div>
    )
}

export default App
