import React from "react";
import { Rectangle,
        NavLink,
        Right,
        UpdatedLink } from './styles';

const Navbar = ({ props }) => {
  return (
    <Rectangle>
      <UpdatedLink to="/">
        <NavLink className={`${(props === "Home") ? "child" : ""}`}>Home</NavLink>
      </UpdatedLink>
      <UpdatedLink to="/about">
        <NavLink className={`${(props === "About") ? "child" : ""}`}>About</NavLink>
      </UpdatedLink><UpdatedLink to="/listen">
        <NavLink className={`${(props === "Listen") ? "child" : ""}`}>Listen</NavLink>
      </UpdatedLink><UpdatedLink to="/report">
        <Right className={`${(props === "Report") ? "child" : ""}`}>Report</Right>
      </UpdatedLink><UpdatedLink to="/login">
        <Right className={`${(props === "Login") ? "child" : ""}`}>Login</Right>
      </UpdatedLink>
    </Rectangle>
  );
}

export default Navbar;