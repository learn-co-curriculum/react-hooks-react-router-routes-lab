import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/movies" exact component={Movies} />
      <Route path="/directors" exact component={Directors} />
      <Route path="/actors" exact component={Actors} />
    </Router>
  );
}

export default App;
