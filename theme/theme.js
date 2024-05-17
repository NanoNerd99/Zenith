import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({

    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'main'},
                    style: {
                        backgroundColor: "#008148",
                        borderRadius: 8,
                        height: 48,
                        width: "188px",
                        padding: "8px 40px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        letterSpacing: "normal",
                        lineHeight: 2.5,
                        color: "white",
                        "&: hover": {
                            backgroundColor: "#008148",
                            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.04), 0 4px 8px 0 raba(0, 0, 0, 0.04), 0 16 px",
                        },
                    },
                },
                {
                    props: {variant: 'ticket'},
                    style: {
                        backgroundColor: "#0177DB",
                        borderRadius: 8,
                        height: 40,
                        width: "144px",
                        fontSize: "13px",
                        fontWeight: "400",
                        letterSpacing: "normal",
                        color: "white",
                        display: 'flex',
                        alignItems: 'center',
                        "&: hover": {
                            backgroundColor: "#01569E",
                            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.04), 0 4px 8px 0 raba(0, 0, 0, 0.04), 0 16 px",
                        },
                    },
                },
                {
                    props: {variant: 'Close'},
                    style: {
                        height: "23px",
                        width: "63px",
                        borderRadius: 100,
                        fontSize: "12px",
                        letterSpacing: "normal",
                        lineHeight: 1,
                        color: "#0177DB",

                        "&: hover": {
                            borderColor: "#0177DB",
                            border: '1px solid currentColor',
                        },
                    },
                },
            ]
        },
    },

    typography: {
        fontSize: 10,
        fontFamily: ["Roboto"].join(","),
        normalToggle:
            {
                letterSpacing: "normal",
                fontSize: 14,
                lineHeight: 2.2,
                opacity: 1,
                textAlign: "center",
            },
        bold:
            {
                letterSpacing: "normal",
                fontWeight: 900,
                fontSize: 16,
                marginRight: 10,
                marginTop: 5,
                marginBottom: 5,
                opacity: 1,
            },
        h6:
            {
                fontWeight: 900,
                letterSpacing: "normal",
                lineHeight: 5,
            },
        subtitle1:
            {
                letterSpacing: "normal",
                lineHeight: 2.2,
                marginTop: 14,
                opacity: 1,
            },
        subtitle2:
            {
                letterSpacing: "normal",
                lineHeight: 2.2,
                fontWeight: 900,
                fontSize: 16,
                marginTop: 14,
                marginBottom: 14,
            },

    },
    palette: {
        background: {
            default: "#f6f6f6",
            paper: "#fff",
        },
        text: {
            primary: "#173A5E",
            secondary: "#46505A",
            third: "#e5e5e5",
        },
        primary: {
            main: "#0177db",
            light: "#e3f2fd",
            dark: "#4a5258",
        },
        buttonGroup: {
            main: "#e5e5e5",
        },
        secondary: {
            main: "#008148",
        },
        error: {
            main: red.A400,
        },
    },
    button: {
        width: "100%",
    },

});

export default theme;
