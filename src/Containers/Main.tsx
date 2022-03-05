import React from "react"
// import { Button, ButtonGroup, Paper } from "@mui/material"
import { Button, Grid, Paper } from "@mui/material"

import Header from "../Components/Header"
// import Footer from "../Components/Footer"
import TabPanel from "../Components/TabPanel"
import useState from "../Functions/useState"

import Am from "../Components/Am"
// import Value from "../Components/Value"
import Know from "../Components/Know"
import Learn from "../Components/Learn"
import Do from "../Components/Do"
import Teach from "../Components/Teach"
import Serve from "../Components/Serve"
import Research from "../Components/Research"
import Invent from "../Components/Invent"

// import IAmJohn from "../IAmJohn"
import data from "../Data"
// import * as cv from "../CV.json"

export const Main = (): JSX.Element => {
    // const { summary, coreValues, expertise, industryApplications, education, experience, teaching, service } = cv
    // const { service } = cv
    const [getTab, setTab] = useState(0)
    const [getSayMore, setSayMore] = useState(true)
    const onTab = (event: any, tab: number) => {
        setTab(tab)
    }
    const onSayMore = () => {
        setSayMore((sayMore) => !sayMore)
    }
    const tabs = Object.keys(data).map((label) => "#" + label)
    const onPrevious = () => {
        setTab(getTab() <= 0 ? tabs.length - 1 : getTab() - 1)
    }
    const onNext = () => {
        setTab((getTab() + 1) % tabs.length)
    }
    const sayMore = getSayMore() ? "<button>say more</button>" : "<button>say less</button>"
    return (
        <>
            <Header labels={tabs} value={getTab()} onChange={onTab} />
            <TabPanel value={getTab()} index={0}>
                <Am sayMore={getSayMore()} />
            </TabPanel>
            {/* <TabPanel value={getTab()} index={1}>
                <Value sayMore={getSayMore()} />
            </TabPanel> */}
            <TabPanel value={getTab()} index={1}>
                <Know sayMore={getSayMore()} />
            </TabPanel>
            <TabPanel value={getTab()} index={2}>
                <Learn sayMore={getSayMore()} />
            </TabPanel>
            <TabPanel value={getTab()} index={3}>
                <Do sayMore={getSayMore()} />
            </TabPanel>
            <TabPanel value={getTab()} index={4}>
                <Teach sayMore={getSayMore()} />
            </TabPanel>
            <TabPanel value={getTab()} index={5}>
                <Serve sayMore={getSayMore()} />
            </TabPanel>
            <TabPanel value={getTab()} index={6}>
                <Research sayMore={getSayMore()} />
            </TabPanel>
            <TabPanel value={getTab()} index={7}>
                <Invent sayMore={getSayMore()} />
            </TabPanel>
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
                <Grid container>
                    <Grid item xs={4}>
                        <Button variant="text" onClick={onPrevious}>
                            {"<button>previous</button>"}
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="text" onClick={onSayMore}>
                            {sayMore}
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="text" onClick={onNext}>
                            {"<button>next</button>"}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            {/* <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={onSayMore}>{sayMore}</Button>
                    <Button onClick={onSayMore}>{sayMore}</Button>
                    <Button onClick={onSayMore}>{sayMore}</Button>
                </ButtonGroup>
            </Paper> */}
        </>
    )
}
//
// experience.slice(0, Math.ceil(experience.length / 2)).map(...)
// experience.slice(-Math.ceil(experience.length / 2)).map(...)
//
// <img src={logo} className="App-logo" alt="logo" />
// <p>ID: {props.id}</p>
// <p>
//  Edit <code>src/App.tsx</code> and save to reload.
// </p>
// <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//  Learn React
// </a>

export default Main
