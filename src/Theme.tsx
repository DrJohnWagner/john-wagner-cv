import { createTheme } from "@mui/material/styles"

// Custom variables...
// https://mui.com/customization/theming/#custom-variables
// declare module "@mui/material/styles" {
//     interface Theme {
//         status: {
//             danger: string
//         }
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//         status?: {
//             danger?: string
//         }
//     }
// }
// const theme = createTheme({
//     status: {
//         danger: orange[500],
//     },
// })

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
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontSize: "1.2em",
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
                    background: "#D9D5BB", //"linear-gradient(90deg, red 0%, red 99%)",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#D9D5BB", //"linear-gradient(90deg, red 0%, red 99%)",
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
            white: "#F2EED4",
        },
        background: {
            paper: "#F2EED4",
            default: "#F2EED4",
        },
        primary: {
            light: "#5A563C",
            main: "#5A563C",
            dark: "#5A563C",
            contrastText: "#FFFFFF",
        },
        text: {
            primary: "#5A563C",
            // primary: "#736F55",
            secondary: "#736F55",
            disabled: "#BFBBA1",
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
        fontSize: 12,
        button: {
            textTransform: "none",
        },
    },
})
console.log(theme)
export default theme
