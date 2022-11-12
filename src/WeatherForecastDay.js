import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css"

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}º`;
    }

    function minTemperature(){
        let temperature= Math.round(props.data.temp.min);
        return `${temperature}º`;
    }

    function day(){
        let date= new Date(props.data.dt *1000);
        let day= date.getDay();
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }


    return(
        <div>
            <div className="WeatherForecast-day mt-5 text-center border rounded ">{day()}</div>
            <div className="WeatherForecast-day-icon"><WeatherIcon code={props.data.weather[0].icon} size={36}/></div>
            <div className="WeatherForecast-temperatures text-center">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>{" "}
                <span className="WeatherForecast-temperature-min text-muted">{minTemperature()}</span>
            <hr/>
            </div>
        </div>
    );
}