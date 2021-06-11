import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"; //BrowserRouter as Router for short
import Base from "./components/Base";
import Data from "./components/Data";
import Inicio from "./components/Inicio";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Link className="btn btn-success btn-sm m-2" to="/">
        Base
      </Link>

      <Link className="btn btn-success btn-sm m-2" to="/contact">
        Contact
      </Link>

      <Link className="btn btn-success btn-sm m-2" to="/inicio">
        Inicio
      </Link>

      <Link className="btn btn-success btn-sm m-2" to="/data">
        Get Data
      </Link>

      <Switch>
        <Route exact path="/">
          <Base></Base>
        </Route>
      </Switch>

      <Switch>
        <Route path="/contact">Contact Form goes here (no component)</Route>
      </Switch>

      <Switch>
        <Route path="/inicio/:variable">
          {/*ruta con param. Se pueden pasar varios /: /: /: etc.*/}
          <Inicio></Inicio>
        </Route>
      </Switch>

      <Switch>
        <Route path="/data">
          <Data></Data>
        </Route>
      </Switch>

      <Switch>
        <Route path="/details/:id">
          <Details></Details>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
