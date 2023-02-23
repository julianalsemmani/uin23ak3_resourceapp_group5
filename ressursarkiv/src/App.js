import "./App.css";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { resources } from "./data/resources";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      <Header />
      <Nav resources={resources} />
      <Routes>
        {resources.map((source, index) => (
          <Route
            path={"/" + source.category}
            key={index}
            element={
              <Resources
                category={source.category}
                content={source.text}
                resources={resources}
                resourceList={source.sources.map((link, index) => {
                  return (
                    <li key={index}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  );
                })}
                id={source.category}
              />
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
