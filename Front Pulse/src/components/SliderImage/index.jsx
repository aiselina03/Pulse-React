import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };
  return (
    <div className="sliderImage">
      <Slider {...settings}>
        <div>
        <div className="photo1">
          <div className="text">
            <h1>
              Food and more <span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </div>
        </div>
      <div>
      <div className="photo2">
          <div className="text">
            <h1>
              Special Dish <span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </div>
      </div>
    <div>
    <div className="photo3">
          <div className="text">
            <h1>
              Hygienic Food <span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </div>
    </div>
      </Slider>
    </div>
  );
}

export default SliderImage;
