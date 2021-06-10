import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Base from "./components/Base";
import Inicio from "./components/Inicio";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Base></Base>
      </Route>
    </Switch>
    <Switch>
      <Route path="/contact">Contact Form goes here</Route>
    </Switch>
    <Switch>
      <Route path="/inicio">
        <Inicio></Inicio>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
