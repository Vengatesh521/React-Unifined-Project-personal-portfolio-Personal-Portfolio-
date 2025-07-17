import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

import htmlImg from "../../assets/Html.png";
import cssImg from "../../assets/CSS3.png";
import jsIcon from "../../assets/js.png";
import nodeImg from "../../assets/node.png";
import expressImg from "../../assets/express.png";
import mongodbImg from "../../assets/Mongodb.png";
import sqlImg from "../../assets/sql.jfif";
import pyImg from "../../assets/py.jpg";

const images = [
  htmlImg,
  cssImg,
  jsIcon,
  nodeImg,
  expressImg,
  mongodbImg,
  sqlImg,
  pyImg,
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <img
        key={index} // important to trigger animation on change
        src={images[index]}
        alt={`Tech ${index}`}
        className="slider-image fade"
      />
    </div>
  );
}

export default ImageSlider;
