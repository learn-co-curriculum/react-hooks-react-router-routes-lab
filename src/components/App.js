import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <>
      <NavBar />
      <Switch>  
        <Route path="/actors"><Actors/></Route>
        <Route path="/directors"><Directors /></Route>
        <Route path="/movies"><Movies/></Route>
        <Route exact path="/"><Home/></Route>
      </Switch>
    </>
)
} 
  
export default App;
