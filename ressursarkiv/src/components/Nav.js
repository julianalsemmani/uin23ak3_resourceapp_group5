import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Nav({ resources }) {
  return (
    <nav>
      {resources.map((source, index) => (
          <NavLink className={({ isActive }) => { 
            return isActive ? "active"  : "nav-link"
           }} 
          key={index} to={"/" + source.category}>{source.category}</NavLink>
      ))}
    </nav>
  );
}
