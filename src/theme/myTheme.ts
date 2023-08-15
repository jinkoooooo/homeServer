import merge from "deepmerge";
import { green, grey, indigo, red } from "@material-ui/core/colors";
import { THEMES } from "../constants";

const defaultColor = {
    50: "#e9f0fb",
    100: "#c8daf4",
    200: "#a3c1ed",
    300: "#7ea8e5",
    400: "#6395e0",
    500: "#4782da",
    600: "#407ad6",
    700: "#376fd0",
    800: "#2f65cb",
    900: "#2052c2 ",
};

const darkColor = {
    100: "#919191",
    200: "#7d7d7d",
    300: "#616161",
    400: "#3d3d3d",
    500: "#080808"
};

const turquoiseColor = {
    100: "#b3ecec",
    200: "#89ecda",
    300: "#43e8d8",
    400: "#40e0d0",
    500: "#3bd6c6",
};

const ivoryColor = {
    100: "#faf0e6",
    200: "#fff5ee",
    300: "#fdf5e6",
    400: "#faf0e6",
    500: "#faebd7",
};

const yGreenColor = {
    100: "#f9f486",
    200: "#e9f486",
    300: "#d9f486",
    400: "#c9f486",
    500: "#b9f486",
};

const dGreenColor = {
    100: "#75876e",
    200: "#697a63",
    300: "#5e6c58",
    400: "#525f4d",
    500: "#465142",
};

const defaultACLTheme = {
    name: THEMES.DEFAULT,
    palette: {
        type: "light",
        primary: {
            main: turquoiseColor[400],
            contrastText: "#FFF",
        },
        secondary: {
            main: turquoiseColor[200],
            contrastText: "#FFF",
        },
        background: {
            default: turquoiseColor[300],
            paper: "#FFF",
        },
    },
    header: {
        color: grey[500],
        background: "#FFF",
        search: {
            color: grey[800],
        },
        indicator: {
            background: turquoiseColor[300],
        },
    },
    footer: {
        color: grey[500],
        background: "#FFF",
    },
    sidebar: {
        color: grey[200],
        background: turquoiseColor[400],
        header: {
            color: grey[200],
            background: ivoryColor[300],
            brand: {
                color: ivoryColor[300],
            },
        },
        footer: {
            color: grey[200],
            background: "#6ec7d3",
            online: {
                background: green[500],
            },
        },
        badge: {
            color: "#FFF",
            background: yGreenColor[300],
        },
    },
};

const darkACLTheme = merge(defaultACLTheme, {
    name: THEMES.DARK,
    palette: {
        type: "dark",
        primary: {
            main: darkColor[500],
            contrastText: "#fab219",
        },
        background: {
            default: darkColor[100],
            paper: darkColor[200],
        },
        text: {
            primary: "rgba(255, 255, 255, 0.95)",
            secondary: "rgba(255, 255, 255, 0.5)",
        },
    },
    header: {
        color: darkColor[500],
        background: "#1B2635",
        search: {
            color: darkColor[500],
        },
    },
    footer: {
        color: darkColor[500],
        background: "#233044",
    },
    sidebar: {
        color: grey[200],
        background: darkColor[400],
        header: {
            color: grey[200],
            background: darkColor[300],
            brand: {
                color: darkColor[300],
            },
        },
        footer: {
            color: grey[200],
            background: "#6ec7d3",
            online: {
                background: darkColor[500],
            },
        },
        badge: {
            color: "#233044",
            background: darkColor[300],
        },
        text: {
            primary: "rgba(255, 255, 255, 0.95)",
            secondary: "rgba(255, 255, 255, 0.5)",
        },
    },
});

const greenACLTheme = merge(defaultACLTheme, {
    name: THEMES.GREEN,
    palette: {
        type: "green",
        primary: {
            main: dGreenColor[500],
            contrastText: "#233044",
        },
        background: {
            default: dGreenColor[100],
            paper: dGreenColor[200],
        },
        text: {
            primary: "rgba(255, 255, 255, 0.95)",
            secondary: "rgba(255, 255, 255, 0.5)",
        },
    },
    header: {
        color: yGreenColor[500],
        background: "#1B2635",
        search: {
            color: dGreenColor[500],
        },
    },
    footer: {
        color: dGreenColor[500],
        background: "#233044",
    },
    sidebar: {
        color: grey[200],
        background: dGreenColor[400],
        header: {
            color: grey[200],
            background: dGreenColor[300],
            brand: {
                color: dGreenColor[300],
            },
        },
        footer: {
            color: grey[200],
            background: "#6ec7d3",
            online: {
                background: dGreenColor[500],
            },
        },
        badge: {
            color: "#233044",
            background: dGreenColor[300],
        },
        text: {
            primary: "rgba(255, 255, 255, 0.95)",
            secondary: "rgba(255, 255, 255, 0.5)",
        },
    },
});


const aclTheme: Array<ACLType> = [
    defaultACLTheme,
    darkACLTheme,
    greenACLTheme
];

export default aclTheme;

export type ACLType = {
    name: string;
    palette: {
        primary: MainContrastTextType;
        secondary: MainContrastTextType;
    };
    header: ColorBgType & {
        search: {
            color: string;
        };
        indicator: {
            background: string;
        };
    };
    footer: ColorBgType;
    sidebar: ColorBgType & {
        header: ColorBgType & {
            brand: {
                color: string;
            };
        };
        footer: ColorBgType & {
            online: {
                background: string;
            };
        };
        badge: ColorBgType;
    };
};

type MainContrastTextType = {
    main: string;
    contrastText: string;
};
type ColorBgType = {
    color: string;
    background: string;
};
