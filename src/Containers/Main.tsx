import React from "react"
// import { Button, ButtonGroup, Paper } from "@mui/material"
import { AppBar, Box, Button, Grid, Paper, Tab, Tabs } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import NavigateNext from "@mui/icons-material/NavigateNext"

import TabPanel from "../Components/TabPanel"
import useState from "../Functions/useState"

import Am from "../Components/Am"
// import Value from "../Components/Value"
import Know from "../Components/Know"
import Learn from "../Components/Learn"
import Do from "../Components/Do"
import Serve from "../Components/Serve"
// import Research from "../Components/Research"
// import Invent from "../Components/Invent"
import Create from "../Components/Create"

import data from "../Data"
interface Props {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
export const Main = (props: Props): JSX.Element => {
    const { onClick } = props
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
    const sayMore = getSayMore() ? "<button>say more things</button>" : "<button>say less things</button>"
    return (
        <div>
            <AppBar position="sticky">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Tabs value={getTab()} onChange={onTab}>
                        {tabs.map((tab) => (
                            <Tab key={tab} label={tab} />
                        ))}
                    </Tabs>
                    <Box
                        sx={{
                            backgroundColor: (theme) => theme.palette.background.default,
                            border: "2px solid",
                            borderColor: (theme) => theme.palette.primary.main,
                            color: "black",
                            width: "24px",
                            height: "24px",
                            margin: "auto 8px auto auto",
                        }}
                    ></Box>
                    <IconButton color="primary" aria-label="mailto" onClick={onClick} style={{ marginRight: "24px" }}>
                        <NavigateNext />
                    </IconButton>
                </div>
            </AppBar>
            <Box style={{ textAlign: "left" }}>
                <TabPanel value={getTab()} index={0}>
                    <Am sayMore={getSayMore()} />
                </TabPanel>
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
                    <Serve sayMore={getSayMore()} />
                </TabPanel>
                <TabPanel value={getTab()} index={5}>
                    <Create sayMore={getSayMore()} />
                </TabPanel>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <div style={{ height: 46 }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div style={{ height: 46 }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div style={{ height: 46 }} />
                    </Grid>
                </Grid>
            </Box>
            <Paper style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Button variant="text" onClick={onPrevious}>
                            {"<button>previous things</button>"}
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="text" onClick={onSayMore}>
                            {sayMore}
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="text" onClick={onNext}>
                            {"<button>next things</button>"}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Main
