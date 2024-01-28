import React from "react";
import "./style.scss";

function Welcome() {
  return (
    <div className="welcome">
      <div className="container">
        <div className="head">
          <div className="header">
            <i className="fa-solid fa-door-open"></i>
            <h1>Welcome</h1>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <h2>2002</h2>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat <br /> sem.
              Vivamus rutrum dui fermentum eros <br /> hendrerit, id lobortis
              leo volutpat.
            </p>
          </div>
          <div className="card">
            <h2>2010</h2>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat <br /> sem.
              Vivamus rutrum dui fermentum eros <br /> hendrerit, id lobortis
              leo volutpat.
            </p>
          </div>
          <div className="card">
            <h2>2018</h2>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat <br /> sem.
              Vivamus rutrum dui fermentum eros <br /> hendrerit, id lobortis
              leo volutpat.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
