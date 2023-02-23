import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ resources }) {
  return (
    <nav>
      {resources.map((source, index) => (
        <button key={index}>
          <Link to={"/" + source.category}>{source.category}</Link>
        </button>
      ))}
    </nav>
  );
}
