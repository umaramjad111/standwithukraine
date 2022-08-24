import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

import customroutes from "./customroutes";
import CustomRoute from "./customroutes/route";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {customroutes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact
            render={() => (
              <CustomRoute
                title={item.title}
                component={item.component}
                route={item.path}
              />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}
