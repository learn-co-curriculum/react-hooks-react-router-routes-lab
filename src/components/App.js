import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom"

function App() {
  return <div>
    <NavBar />
    <Outlet />
  </div>;
}

export default App;
