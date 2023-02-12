import React from "react";
import { resources } from "../data/resources";
import Articles from "./Articles";

export default function MainContent() {
  return (
    <main>
      {resources.map((source, index) => (
        <Articles
          key={index}
          category={source.category}
          content={source.text}
          resources={source.sources.map((link, index) => {
            return <li key={index}>{link.title}</li>;
          })}
          id={source.category}
        />
      ))}
    </main>
  );
}