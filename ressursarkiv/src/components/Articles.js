import React from "react";

export default function Articles({ category, content, resources }) {
  return (
    <>
      <article className="page-content">
        <h2>{category}</h2>
        <p>{content}</p>
        <ul className="content-links">{resources}</ul>
      </article>
    </>
  );
}
