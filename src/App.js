import React from "react";
import "antd/dist/antd.min.css";
import "antd-button-color/dist/css/style.css";
import "./App.css";
import "./responsive.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { GameProvider } from "./context/GameContext";  // Import the GameProvider

import SignUp from "./component/pages/SignUp";
import Main from "./component/layout/main";
import Pricing from "./component/pages/Pricing";
import Cover from "./component/authentication/signup/Cover";
import Illustration from "./component/authentication/signup/Illustration";
import SignIn from "./component/pages/SignIn";
import PageFound from "./component/pages/PageFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GameProvider>  {/* Wrap the GameProvider around the Switch component */}
          <Switch>
            <Route path="/sign-up" exact component={SignUp} />
            <Route
              path="/authentication/sign-up/basic"
              exact
              component={SignUp}
            />
            <Route path="/authentication/sign-up/cover" exact component={Cover} />
            <Route path="/pages/SignIn" exact component={SignIn} />
            <Route
              path="/authentication/sign-up/illustration"
              exact
              component={Illustration}
            />
            <Route path="/sign-in" exact component={PageFound} />
            {/* <Route path="/sign-in" exact component={SignIn} /> */}
            <Route path="/pages/pricing" exact component={Pricing} />

            <Route path="/:id" component={Main} />

            <Redirect
              to={{
                pathname: "/pages/SignIn",
              }}
            />
          </Switch>
        </GameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
