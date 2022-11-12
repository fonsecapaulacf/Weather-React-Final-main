import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">


        <div className="row">
            <h1 className="col-6">{props.data.city}</h1>

            <div className="col-6 d-flex">
                        
                <div className="WeatherTemperature">
                    <WeatherTemperature celsius={props.data.temperature}/>
                </div>
                <div className="Icon">
                    <WeatherIcon code={props.data.icon} size={80} />
                </div>
            </div>

        </div>


        <div className="Date-Description-Humidity-Wind row mt-1">
            <div className="col-6">
                <ul>
                    <li><FormattedDate date={props.data.date}/></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            </div>
            <div className="col-6">
                <ul>
                    <li> Humidity:<span className="Humidity"> {props.data.humidity} % </span></li>
                    <li> Wind: <span className="Wind">{props.data.wind} km/h </span>    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}