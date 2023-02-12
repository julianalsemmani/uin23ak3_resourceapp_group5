import React from "react";

export default function Articles({ category, content, resources }) {
  return (
    <>
      <article>
        <h2>{category}</h2>
        <p>{content}</p>
        <ul>{resources}</ul>
      </article>
    </>
  );
}
