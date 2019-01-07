import React, { Component } from "react";
import clear from "../images/clear.png";
import cloudy from "../images/cloudy.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import unkown from "../images/unkown.png";

class weather extends Component {
  render() {
    const data = this.props.data;
    const sec = this.props.data.sunrise;
    const date = new Date(sec * 1000);
    const SunriseStr = date.toLocaleTimeString();

    console.log(data);
    return (
      <ul id="result">
        <li>
          Location: {data.city},{data.country}
        </li>
        <li>Temprature: {data.temp} &#8451;</li>
        <li>Humidity: {data.humidity} %</li>
        <li>Details: {data.desc}</li>
        <li>Sunrise: {SunriseStr}</li>
        {(() => {
          switch (data.weather) {
            case "Clouds":
              return <img src={cloudy} />;
            case "Clear":
              return <img src={clear} />;
            case "Rain":
              return <img src={rain} />;
            case "Snow":
              return <img src={snow} />;
            default:
              return <img src={unkown} />;
          }
        })()}
      </ul>
    );
  }
}

export default weather;
