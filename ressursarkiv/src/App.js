import './css/main.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { resources } from "./data/resources";
import Resources from "./components/Resources";
import Layout from "./components/Layout";


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout />}>     
          {resources.map((source, index) => (
          <Route
            path={source.category}
            key={index}
            element={
              <Resources
                category={source.category}
                content={source.text}
                resources={resources}
                resourceList={source.sources.map((link, index) => {
                  return (
                    <li className="link-item" key={index}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  );
                })}
                id={source.category}
              />
            }
          />
        ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
