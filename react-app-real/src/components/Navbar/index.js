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
      <UpdatedLink to="/friends">
        <NavLink className={`${(props === "Friends") ? "child" : ""}`}>About</NavLink>
      </UpdatedLink><UpdatedLink to="/clubs">
        <NavLink className={`${(props === "Clubs") ? "child" : ""}`}>Listen</NavLink>
      </UpdatedLink><UpdatedLink to="/trove">
        <NavLink className={`${(props === "Trove") ? "child" : ""}`}>Notes</NavLink>
      </UpdatedLink><UpdatedLink to="/register">
        <Right className={`${(props === "Register") ? "child" : ""}`}>Report</Right>
      </UpdatedLink><UpdatedLink to="/login">
        <Right className={`${(props === "Login") ? "child" : ""}`}>Sign Up</Right>
      </UpdatedLink>
      </UpdatedLink><UpdatedLink to="/login">
        <Right className={`${(props === "Login") ? "child" : ""}`}>Login</Right>
      </UpdatedLink>
    </Rectangle>
  );
}

export default Navbar;