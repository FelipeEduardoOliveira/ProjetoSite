import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Pages/home";

function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
