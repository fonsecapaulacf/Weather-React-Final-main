import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [sentence, setSentence] = useState("");
  let [loaded, setLoaded] = useState(null);

  function showTemperature(response) {
    setLoaded(true);
    setSentence({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    });
  }

  function changeSentence(event) {
    event.preventDefault();
    let apiKey = "b0661e5e22b852583e44461d886f5f6a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={changeSentence}>
        <input className="city-input"
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input className="btn" type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
        
        {form}
        <h4>{city}</h4>
        <div className="temperature">{Math.round(sentence.temperature)} ºC </div>
        <ul className="info"> 
          <li>Description: {sentence.description}</li>
          <li>Humidity: {sentence.humidity}%</li>
          <li>Wind: {sentence.wind}km/h</li>
          <li><img src={sentence.icon} alt={sentence.description} /></li>
        </ul>

    <div className="gitLink">
    This project was coded by Paula Fonseca and is open-sourced on {""}  
        <a
        href="https://github.com/fonsecapaulacf/Weather-React-Final-main.git"
        target="_blank"
        rel="noreferrer">Github</a>.
    </div>
    </div>
    </div>
    );

  } else {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
      
      {form}
      <h4>Porto</h4>
      <div className="temperature">22ºC</div>
    <ul className="info">
      <li>Description: Sunny</li>
      <li>Humidity: 30%</li>
      <li>Wind: 30 km/h</li>
      <li></li>
    </ul>

    <div className="gitLink">
    This project was coded by Paula Fonseca and is open-sourced on {""}  
        <a
        href="https://github.com/fonsecapaulacf/Weather-React-Final-main.git"
        target="_blank"
        rel="noreferrer">Github</a>.
    </div>
    </div>
    </div>
    );
  }


}



      