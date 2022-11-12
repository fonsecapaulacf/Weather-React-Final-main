import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
      ready:true,
      date:new Date(response.data.dt*1000),
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function changeSentence(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search(){
    let apiKey = "b0661e5e22b852583e44461d886f5f6a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }



  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={changeSentence}>
          <div className="row">
            <div className="col-9">
            <input
              className="Search-form form-control"
              type="search"
              placeholder="Search for a city..."
              onChange={updateCity}
              autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input 
              className="btn w-100" 
              type="submit" 
              value="Search" />
              </div>
            </div>
        </form>

        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>

      </div>
    );

  } else {
    
  search();
  return "Loading...";
  }}