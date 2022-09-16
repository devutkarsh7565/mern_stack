import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-20 flex justify-center items-center">
      <div className="h-full w-[80rem] flex items-center justify-between">
        <div className="text-2xl font-semibold text-green-500 ">devUtkarsh</div>
        <div className="flex justify-evenly gap-5 items-center w-1/2 ">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
