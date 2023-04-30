import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
  <div>
    {/*{code here}*/}
    <nav>
      <ul>
        <li>
          <NavLink  className={"a"} to="/">
            Home page
          </NavLink>
        </li>
        <li>
          <NavLink className={"a"} to="/actors">Actors page</NavLink>
        </li>
        <li>
          <NavLink className={"a"} to="/directors">Directors page</NavLink>
        </li>
        <li>
          <NavLink className={"a"} to="/movies">Movies page</NavLink>
        </li>
      </ul>
    </nav>
  </div>
  );
}

export default NavBar;
