import React from "react";
import "./style.scss";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="head">
          <div className="header">
            <i className="fa-solid fa-utensils"></i>
            <h1>Our Services</h1>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h1>Breakfast</h1>
            <p>
              In vitae nisi aliquam, scelerisque <br /> leo a, volutpat sem.
              Vivamus <br /> rutrum dui fermentum.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h1>Brunch</h1>
            <p>
              In vitae nisi aliquam, scelerisque <br /> leo a, volutpat sem.
              Vivamus <br /> rutrum dui fermentum.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h1>Lunch</h1>
            <p>
              In vitae nisi aliquam, scelerisque <br /> leo a, volutpat sem.
              Vivamus <br /> rutrum dui fermentum.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h1>Dinner</h1>
            <p>
              In vitae nisi aliquam, scelerisque <br /> leo a, volutpat sem.
              Vivamus <br /> rutrum dui fermentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
