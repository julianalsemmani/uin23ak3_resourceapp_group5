import React from "react";

export default function Resources({ category, content, resourceList }) {
  return (
    <>
      <article className="page-content">
        <h2>{category}</h2>
        <p>{content}</p>
        <ul className="content-links">{resourceList}</ul>
      </article>
    </>
  );
}
