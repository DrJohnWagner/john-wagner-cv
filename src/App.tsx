import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material/"

import Main from "./Containers/Main"
import useState from "./Functions/useState"

import "./App.css"
import createIndexedTheme from "./Theme/Theme"

const THEMES = 9

const App = (): JSX.Element => {
    const [getTheme, setTheme] = useState(0)
    return (
        <div className="App">
            <ThemeProvider theme={createIndexedTheme(getTheme())}>
                <CssBaseline />
                <Main onClick={() => setTheme((getTheme() + 1) % THEMES)} />
            </ThemeProvider>
        </div>
    )
}

export default App
