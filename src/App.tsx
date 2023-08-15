import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {
    StylesProvider,
    ThemeProvider as MuiThemeProvider,
    jssPreset,
} from "@material-ui/core/styles";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import {ThemeProvider} from "styled-components/macro";
import {create} from "jss";
import DateFnsUtils from "@date-io/date-fns";
import Routes from "./routes/Routes";
import createTheme from "./theme";
import {AppStateType} from "./redux/reducers";
import {THEMES} from "./constants";
import {setTheme} from "./redux/actions/themeActions";

const jss = create({
    ...jssPreset(),
    insertionPoint: document.getElementById("jss-insertion-point")!,
});

function App() {
    const theme = useSelector((state: AppStateType) => state.themeReducer);
    const dispatcher = useDispatch();

    useEffect(() => {
        settingTheme();
    }, [])

    // 테마 적용 함수
    const settingTheme = () => {
        if (THEMES.DARK != theme.currentTheme) {
            console.log("theme")
            dispatcher(setTheme(THEMES.DARK))
        } else {
            console.log("currentTheme", theme.currentTheme)
        }
    }

  return (
      <React.Fragment>
        <Helmet
            titleTemplate="%s | AWCS App"
            defaultTitle="AWCS App - Altiall Warehouse Control System"
        />
        <StylesProvider jss={jss}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={createTheme(theme.currentTheme)}>
              <ThemeProvider theme={createTheme(theme.currentTheme)}>
                  <Routes/>
              </ThemeProvider>
            </MuiThemeProvider>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </React.Fragment>
  );
}

export default App;
