import React, { useEffect } from "react"
// import { Button, ButtonGroup, Paper } from "@mui/material"
import { Grid, Paper, Tab, Tabs } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"

// import NavigateNext from "@mui/icons-material/NavigateNext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

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

const ThemeButton = ({
    open,
    onClose,
    onClick,
}: {
    open: boolean
    onClose: () => void
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}) => {
    return (
        <>
            <Tooltip
                arrow
                onClose={onClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h3" color="inherit">
                            ⇑
                        </Typography>
                        <Typography variant="h6" color="inherit">
                            Click here to
                        </Typography>
                        <Typography variant="h6" color="inherit">
                            change themes!
                        </Typography>
                    </Box>
                }
            >
                <IconButton
                    onClick={onClick}
                    style={{ marginRight: "64px" }}
                    aria-label="fingerprint"
                    color="secondary"
                >
                    <Box
                        sx={{
                            backgroundColor: (theme) => theme.palette.background.default,
                            border: "2px solid",
                            borderColor: (theme) => theme.palette.primary.main,
                            width: "24px",
                            height: "24px",
                            // margin: "auto 0px auto auto",
                        }}
                    ></Box>
                </IconButton>
            </Tooltip>
        </>
    )
}

const DropdownMenu = ({
    tabs,
    anchorEl,
    onClose,
    // onClick,
    onChange,
}: {
    tabs: string[]
    anchorEl?: Element | ((element: Element) => Element) | null | undefined
    onClose: () => void
    onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void
}) => {
    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={onClose}
            sx={{
                "& .MuiMenu-paper": {
                    border: "1px solid",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                },
                display: { xs: "block", md: "none" },
            }}
        >
            {tabs.map((tab, index) => (
                <MenuItem
                    sx={{ margin: "8px 16px" }}
                    key={tab}
                    onClick={(event) => {
                        onClose()
                        onChange(event, index)
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        {tab}
                    </Typography>
                </MenuItem>
            ))}
        </Menu>
    )
}
interface Props {
    themeIndex: number
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
export const Main = (props: Props): JSX.Element => {
    const { onClick } = props
    const lg = useMediaQuery(useTheme().breakpoints.up("lg"))
    const [getTab, setTab] = useState(0)
    const [getSayMore, setSayMore] = useState(true)
    const [getOpenSayMore, setOpenSayMore] = useState(false)
    const [getOpenTheme, setOpenTheme] = useState(false)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

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
    useEffect(() => {
        setTimeout(() => {
            setOpenSayMore(true)
            setTimeout(() => {
                setOpenSayMore(false)
            }, 10000)
        }, 10000)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setOpenTheme(true)
            setTimeout(() => {
                setOpenTheme(false)
            }, 10000)
        }, 15000)
    }, [])
    const sayMore = getSayMore() ? "<button>say more things</button>" : "<button>say less things</button>"
    return (
        <div>
            <AppBar position="static">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <DropdownMenu
                            tabs={tabs}
                            anchorEl={anchorElNav}
                            onClose={handleCloseNavMenu}
                            onChange={onTab}
                        />
                    </Box>
                    <Tabs sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} value={getTab()} onChange={onTab}>
                        {tabs.map((tab) => (
                            <Tab key={tab} label={tab} />
                        ))}
                    </Tabs>
                    <div style={{ margin: "auto" }} />
                    <ThemeButton open={getOpenTheme()} onClose={() => setOpenTheme(false)} onClick={onClick} />
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
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTop: "1px solid",
                    borderColor: (theme) => theme.palette.primary.main + "AA",
                }}
            >
                <Grid container>
                    {lg && (
                        <Grid item xs={12} md={4}>
                            <Button variant="text" onClick={onPrevious}>
                                {"<button>previous things</button>"}
                            </Button>
                        </Grid>
                    )}
                    <Grid item xs={12} md={lg ? 4 : 12}>
                        <Tooltip
                            arrow
                            onClose={() => setOpenSayMore(false)}
                            open={getOpenSayMore()}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title={
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="h5" color="inherit">
                                        Welcome!
                                    </Typography>
                                    <Typography variant="h6" color="inherit">
                                        When you are done enjoying
                                    </Typography>
                                    <Typography variant="h6" color="inherit">
                                        Moonrise Over Uluru
                                    </Typography>
                                    <Typography variant="h6" color="inherit">
                                        click here to learn more
                                    </Typography>
                                    <Typography variant="h6" color="inherit">
                                        (or less)about me!
                                    </Typography>
                                    <Typography variant="h3" color="inherit">
                                        ⇓
                                    </Typography>
                                </Box>
                            }
                        >
                            <Button variant="text" onClick={onSayMore}>
                                {sayMore}
                            </Button>
                        </Tooltip>
                    </Grid>
                    {lg && (
                        <Grid item xs={12} md={4}>
                            <Button variant="text" onClick={onNext}>
                                {"<button>next things</button>"}
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </div>
    )
}

export default Main
