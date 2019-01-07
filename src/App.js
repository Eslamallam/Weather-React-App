import React, { Component } from "react";
import "./App.css";
import WeatherForm from "./components/weatherForm";
import Weather from "./components/weather";
import Error from "./components/Error";

const API_Key = "cdaec7ddf2cad8f52e2af566ea8ed0a0";

class App extends Component {
  state = {
    temp: "",
    humidity: "",
    city: "",
    country: "",
    desc: "",
    sunrise: "",
    showResult: false
  };

  showResult = () => {
    this.setState({
      showResult: true
    });
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`
      );

      const data = await api.json();
      console.log(data);
      this.setState({
        temp: Math.round(data.main.temp - 273.15),
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        desc: data.weather[0].description,
        weather: data.weather[0].main,
        sunrise: data.sys.sunrise,
        error: ""
      });
    } else {
      this.setState({
        temp: "",
        humidity: "",
        city: "",
        country: "",
        desc: "",
        weather: "",
        sunrise: "",
        showResult: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <WeatherForm
          getWeather={this.getWeather}
          showResult={this.showResult}
        />
        {this.state.showResult ? <Weather data={this.state} /> : <Error />}
      </div>
    );
  }
}

export default App;
