"use client";
import { useState } from "react";
import Slider from "react-slider";
import "./pricesSlider.css";

// const MIN = 0;
// const MAX = 1000;

const PricesSlider = ({ values, setValues, MIN, MAX }) => {
  //   const [values, setValues] = useState([MIN, MAX]);

  return (
    <div>
      <div className="prices-slider">
        <span className="value">&#8362;{values[0]}</span> -{" "}
        <span className="value">&#8362;{values[1]}</span>
      </div>
      <Slider
        className="slider"
        value={values}
        min={MIN}
        max={MAX}
        onChange={setValues}
      />
    </div>
  );
};

export default PricesSlider;
