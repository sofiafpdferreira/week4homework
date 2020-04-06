import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function showData(response) {
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)}ºC`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${Math.round(response.data.main.humidity)}%`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)}km/h`);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function getData(event) {
    event.preventDefault();
    let apiKey = "c33f9f369abbfb38690d5dd06c2b8718";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(showData);
  }

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="type a city here"
          onChange={getCity}
        />
        <input type="submit" value="search" onClick={getData} />
      </form>
      <br />
      {temperature} <br />
      {description} <br />
      {humidity} <br />
      {wind}
      <br />
      <img src={icon} alt="" />
    </div>
  );
}
