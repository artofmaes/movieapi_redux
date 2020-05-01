import "./styles.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

import store from "./data";
import Movies from "./components/Movies";
import Favorites from "./components/Favorites";

const root = document.getElementById("app");

const App = props => {
  return (
    <Provider store={store} className="flexie">
      <div className="flexbox">
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <Typography variant="h4" align="center">
              Search Movies
            </Typography>
          </Toolbar>
        </AppBar>

        <Movies />
      </div>
      <div className="flexbox">
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <Typography variant="h4" align="center">
              Favorites
            </Typography>
          </Toolbar>
        </AppBar>
        <Favorites />
      </div>
    </Provider>
  );
};

render(<App />, root);
