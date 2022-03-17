import { createTheme } from "@mui/material/styles"

const PALETTES = [
    {
        common: "#F2EED4",
        background: "#F2EED4",
        primary: "#5A563C",
        secondary: "#D9D5BB",
        text: "#5A563C",
        disabled: "#BFBBA1",
    },
    // Maroon
    {
        common: "#F2EED4",
        background: "#e3d4af",
        primary: "#471705",
        secondary: "#cdb18d",
        text: "#471705",
        disabled: "#BFBBA1",
    },
    // Teal
    {
        common: "#F2EED4",
        background: "#ffcc89",
        primary: "#016966",
        secondary: "#8cd4d8", //"#E79F02", //"#ffb81e",
        text: "#016966",
        disabled: "#BFBBA1",
    },
    // Steel Blue
    // https://icolorpalette.com/56d6d4_b4a2a1_6e6a6d_64a49a_447cac
    {
        common: "#F2EED4",
        background: "#b3b1b3",
        primary: "#284966",
        secondary: "#9ec6c0", //"#ffb81e",
        text: "#284966",
        disabled: "#BFBBA1",
    },
    // Plum
    // https://icolorpalette.com/4480b1_822a67_fbe372_c298c6_041520
    {
        common: "#F2EED4",
        background: "#aac6de",
        primary: "#35112a",
        secondary: "#fbe88c", //"#ffb81e",
        text: "#35112a",
        disabled: "#BFBBA1",
    },
    // Plum (Blue-Yellow Reversed)
    // https://icolorpalette.com/4480b1_822a67_fbe372_c298c6_041520
    {
        common: "#F2EED4",
        background: "#fbe88c",
        primary: "#35112a",
        secondary: "#aac6de", //"#ffb81e",
        text: "#35112a",
        disabled: "#BFBBA1",
    },
    // Forest Green with Yellow from Plum
    // https://icolorpalette.com/b0e8a8_83d464_5bac4b_146c07_15360a
    {
        common: "#F2EED4",
        background: "#b4dbad",
        primary: "#173c0b",
        secondary: "#fbe88c", //"#fbe88c",
        text: "#173c0b",
        disabled: "#BFBBA1",
    },
    // Red
    // https://icolorpalette.com/bc9422_775e0b_7498bd_c35306_3a5c6c
    {
        common: "#F2EED4",
        background: "#b2cad6",
        primary: "#451d02",
        secondary: "#f5de93", //"#fbe88c",
        text: "#451d02",
        disabled: "#BFBBA1",
    },
    // Red but with Turquoise secondary...
    // https://icolorpalette.com/bc9422_775e0b_7498bd_c35306_3a5c6c
    {
        common: "#F2EED4",
        background: "#92e3f6",
        primary: "#451d02",
        secondary: "#FEF986", //"#fbe88c",
        text: "#451d02",
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
                        // primary: "#5A563C",
                        // // primary: "#736F55",
                        // secondary: "#736F55",
                        // disabled: "#BFBBA1",
                        // backgroundColor: "#F2EED4", //theme.palette.background.default,
                        backgroundColor: PALETTES[index].primary, //"#5A563C", //theme.palette.background.default,
                    },
                },
            },
            // MuiAccordionDetails: {
            //     styleOverrides: {
            //         root: {
            //             background: "#F2EED4",
            //             backgroundColor: "#F2EED4",
            //             foreground: "red",
            //             foregroundColor: "red",
            //             padding: "0px 48px",
            //             "&.Mui-expanded": {
            //                 fontSize: "1.2em",
            //             },
            //         },
            //     },
            // },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        fontSize: "1.2em",
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
                    label: {
                        fontSize: "1.05em",
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
                        background: PALETTES[index].secondary, //"#D9D5BB", //"linear-gradient(90deg, red 0%, red 99%)",
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
                        background: PALETTES[index].secondary, //"#D9D5BB", //"linear-gradient(90deg, red 0%, red 99%)",
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
                contrastText: PALETTES[index].secondary,
            },
            text: {
                primary: PALETTES[index].text,
                secondary: PALETTES[index].text,
                disabled: PALETTES[index].disabled,
            },
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
