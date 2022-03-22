import { createTheme } from "@mui/material/styles"

const PALETTES = [
    {
        // See #15 at https://visme.co/blog/website-color-schemes/
        common: "#F2EED4",
        quaternary: "#5E6C84", //"#AC3B61",
        tertiary: "#EEE2DC",
        background: "#EDC7B7", //"#F2EED4",
        primary: "#123D6A", //"#5A563C",
        secondary: "#BAB1B5", //"#D9D5BB",
        text: "#123D6A", //"#5A563C",
        disabled: "#BFBBA1",
    },
    {
        common: "#F2EED4",
        quaternary: "#503915", //"#D9D5BB",
        tertiary: "#CCBCA4", //"#C2B093", //"#ebd5b3", //"#F2EED4",
        background: "#ebd5b3", //"#F2EED4",
        primary: "#503915", //"#5A563C",
        secondary: "#dfbc85", //"#D9D5BB",
        text: "#503915", //"#5A563C",
        disabled: "#BFBBA1",
    },
    // Maroon
    {
        common: "#F2EED4",
        quaternary: "#471705",
        primary: "#471705",
        secondary: "#cab18d",
        tertiary: "#D7C0A2", //"#6EC9B4",
        background: "#e3d4af",
        text: "#471705",
        disabled: "#BFBBA1",
        // EEE2DC cdb18d
    },
    // Steel Blue
    // https://icolorpalette.com/56d6d4_b4a2a1_6e6a6d_64a49a_447cac
    {
        common: "#F2EED4",
        quaternary: "#6B0F1A", //"#9ec6c0", //"#ffb81e",
        tertiary: "#C0BEC0", //"#b3b1b3",
        background: "#D4D3D5", //"#D1D0D2", //"#CFCED0", //"#CCCBCD", //"#C2C1C3", //"#b3b1b3",
        primary: "#284966",
        secondary: "#8BBBC3", //"#9ec6c0", //"#ffb81e",
        text: "#284966",
        disabled: "#BFBBA1",
    },
    // Plum
    // https://icolorpalette.com/4480b1_822a67_fbe372_c298c6_041520
    {
        common: "#F2EED4",
        quaternary: "#263C61",
        tertiary: "#9DB9D1",
        background: "#B7D3EB",
        primary: "#0F416C", //"#285A85", //"#001847",
        secondary: "#FFED91",
        text: "#0F416C", //"#285A85", //"#001847",
        disabled: "#BFBBA1",
    },
    // Plum (Blue-Yellow Reversed)
    // https://icolorpalette.com/4480b1_822a67_fbe372_c298c6_041520
    {
        common: "#F2EED4",
        quaternary: "#263C61", //"#ffb81e",
        tertiary: "#B7D3EB",
        background: "#FFF094",
        primary: "#001847",
        secondary: "#9DB9D1", //"#ffb81e",
        text: "#0F416C", //"#285A85", //"#001847",
        disabled: "#BFBBA1",
    },
    // Forest Green with Yellow from Plum
    // https://icolorpalette.com/b0e8a8_83d464_5bac4b_146c07_15360a
    {
        common: "#F2EED4",
        quaternary: "#AB97BA", //"#fbe88c",
        background: "#addcbd",
        primary: "#173c0b",
        tertiary: "#adb4dc", //"#fbe88c",
        secondary: "#dcadcb",
        text: "#173c0b",
        disabled: "#BFBBA1",
    },
]
// Custom variables...
// https://mui.com/customization/theming/#custom-variables
// declare module "@mui/material/styles" {
//     interface Theme {
//         MyComponent: {
//             height: number
//         }
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//         MyComponent?: {
//             height?: number
//         }
//     }
// }

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
// https://mui.com/customization/default-theme/

const createIndexedTheme = (index: number) => {
    return createTheme({
        components: {
            // Doesn't seem to work...
            // MuiCssBaseline: {
            //     styleOverrides: {
            //         "@global": {
            //             p: {
            //                 margin: "100px",
            //                 // marginBlockStart: "50em",
            //                 marginBlockStart: "100px",
            //             },
            //         },
            //     },
            // },
            // MuiAccordion: {
            //     styleOverrides: {
            //         root: {
            //             border: "0px solid",
            //             margin: "0px 0px 0px 0px",
            //             "&:before": {
            //                 display: "none",
            //             },
            //             "&.Mui-expanded": {
            //                 fontSize: "1.2em",
            //             },
            //         },
            //     },
            // },
            // MuiAccordionSummary: {
            //     styleOverrides: {
            //         root: {
            //             backgroundColor: "#F2EED4", //theme.palette.background.default,
            //             flexDirection: "row-reverse",
            //             // margin: "0px 0px 0px 8px",
            //             "&.Mui-expanded": {
            //                 fontSize: "1.2em",
            //             },
            //         },
            //     },
            // },
            MuiAvatar: {
                styleOverrides: {
                    root: {
                        backgroundColor: PALETTES[index].quaternary, //"#5A563C", //theme.palette.background.default,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        fontSize: "1.2em",
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: PALETTES[index].secondary,
                    },
                },
            },
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        padding: "8px",
                    },
                },
            },
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        padding: "8px",
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderColor: PALETTES[index].primary,
                        backgroundColor: PALETTES[index].tertiary,
                    },
                    label: {
                        fontSize: "1.0rem",
                    },
                    avatar: {
                        border: "0.5 solid",
                        backgroundColor: PALETTES[index].tertiary,
                        borderColor: PALETTES[index].primary,
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: PALETTES[index].secondary, //"#D9D5BB", //"linear-gradient(90deg, red 0%, red 99%)",
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        background: PALETTES[index].tertiary, //"#D9D5BB", //"linear-gradient(90deg, red 0%, red 99%)",
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        fontSize: "1.2em",
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        // background: PALETTES[index].secondary, //"#D9D5BB", //"linear-gradient(90deg, red 0%, red 99%)",
                    },
                },
            },
            MuiToggleButton: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": {
                            backgroundColor: PALETTES[index].primary + "22", //"rgba(0,0,0,0.15)",
                            // border-color: #000 !important;
                            borderColor: PALETTES[index].primary,
                        },
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        border: "2px solid",
                        borderColor: PALETTES[index].primary,
                        color: PALETTES[index].primary,
                        backgroundColor: PALETTES[index].secondary,
                    },
                    arrow: {
                        color: PALETTES[index].primary, //"red",
                    },
                },
            },
            MuiPaginationItem: {
                styleOverrides: {
                    outlined: {
                        "&.Mui-selected": {
                            backgroundColor: PALETTES[index].primary + "22", //"rgba(0,0,0,0.15)",
                            // border-color: #000 !important;
                            borderColor: PALETTES[index].primary,
                        },
                    },
                },
            },
            MuiBottomNavigationAction: {
                styleOverrides: {
                    label: {
                        fontSize: "1.2em",
                        // Whoever came up with
                        // this was dropped on
                        // their head as a baby...
                        "&.Mui-selected": {
                            fontSize: "1.2em",
                        },
                    },
                },
            },
        },
        palette: {
            common: {
                white: PALETTES[index].common,
            },
            background: {
                paper: PALETTES[index].background,
                default: PALETTES[index].background,
            },
            primary: {
                light: PALETTES[index].primary,
                main: PALETTES[index].primary,
                dark: PALETTES[index].primary,
                contrastText: PALETTES[index].primary,
            },
            secondary: {
                light: PALETTES[index].secondary,
                main: PALETTES[index].secondary,
                dark: PALETTES[index].secondary,
                contrastText: "red", //PALETTES[index].secondary,
            },
            text: {
                primary: PALETTES[index].text,
                secondary: PALETTES[index].text,
                disabled: PALETTES[index].disabled,
            },
            divider: PALETTES[index].quaternary,
        },
        typography: {
            fontFamily: [
                "Garamond",
                "IBM Plex Sans",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
            ].join(","),
            fontSize: 14,
            subtitle1: {
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.3,
            },
            body2: {
                fontSize: "0.95rem",
            },
            button: {
                textTransform: "none",
            },
        },
        // MyComponent: {
        //     height: 10,
        // },
    })
}

// const theme = createIndexedTheme(INDEX)

export default createIndexedTheme
