
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (<div >
<NavLink to='/' >Home</NavLink>
<NavLink to='/movies' >Movies</NavLink>
<NavLink to='/directors' >Directors</NavLink>
<NavLink to='/actors' >Actors</NavLink>

  </div>
   
  );
}

export default NavBar;