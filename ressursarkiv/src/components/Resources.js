import React from "react";

export default function Resources({ category, content, resourceList }) {
  return (
    <>
      <article>
        <h2>{category}</h2>
        <p>{content}</p>
        <ul>{resourceList}</ul>
      </article>
    </>
  );
}
