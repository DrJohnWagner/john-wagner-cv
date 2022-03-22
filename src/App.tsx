import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material/"

import Main from "./Containers/Main"
import useState from "./Functions/useState"

import "./App.css"
import createIndexedTheme from "./Theme/Theme"

const THEMES = 7

const App = (): JSX.Element => {
    const [getThemeIndex, setThemeIndex] = useState(0)
    return (
        <div className="App">
            <ThemeProvider theme={createIndexedTheme(getThemeIndex())}>
                <CssBaseline />
                <Main themeIndex={getThemeIndex()} onClick={() => setThemeIndex((getThemeIndex() + 1) % THEMES)} />
            </ThemeProvider>
        </div>
    )
}

export default App
