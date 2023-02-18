import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App(){
    return(
        <div className="App">
            <div className="container">
                <Weather defaultCity="Lille"/>
                <footer className="text-muted">
                    This project was coded by {" "}
                    <a
                    href="https://www.linkedin.com/in/fonsecaferreira/"
                    className="text-decoration-none links"
                    target="_blank"
                    rel="noreferrer">
                    Paula Fonseca</a>
                    {" "} 
                    and is open-sourced on {""}  
                    <a
                    href="https://github.com/fonsecapaulacf/Weather-React-Final-main.git"
                    className="text-decoration-none links"
                    target="_blank"
                    rel="noreferrer">
                    Github</a> 
                    {" "}and hosted on {" "}
                    <a
                    href="https://glowing-cranachan-ba5f47.netlify.app/"
                    className="text-decoration-none links"
                    target="_blank"
                    rel="noreferrer">
                    Netlify</a>.
                </footer>
            </div>    
        </div>
    )
}