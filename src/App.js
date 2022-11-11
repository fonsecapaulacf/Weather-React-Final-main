import React from "react";
import Weather from "./Weather";

export default function App(){
    return(
        <div className="App">
            <div className="container">
                <Weather defaultCity="Lille"/>
                <footer>
                    This project was coded by Paula Fonseca and is open-sourced on {""}  
                    <a
                    href="https://github.com/fonsecapaulacf/Weather-React-Final-main.git"
                    target="_blank"
                    rel="noreferrer">Github</a>.
                </footer>
            </div>    
        </div>
    )
}