import React from "react";
import { resources } from "../data/resources";

export default function Nav(){
    return (
        <nav>
           {resources.map((source, index) => (
                <button className="button-link" key={index}>
                    <a href={source.category}>{source.category}</a>
                </button>
           ))} 
         
        </nav>
   
    )
}