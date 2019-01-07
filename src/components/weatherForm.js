import React from "react";

const WeatherForm = props => {
  return (
    <form id="continput" onSubmit={props.getWeather}>
      <input type="text" id="city" name="city" placeholder="City..." />
      <input type="text" id="country" name="country" placeholder="Country..." />
      <button id="btn-weather" onClick={props.showResult}>
        Get weather
      </button>
    </form>
  );
};

export default WeatherForm;
