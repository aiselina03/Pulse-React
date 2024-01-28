import React, { useState } from "react";
import "./style.scss";
import { NavLink, useParams } from "react-router-dom";

function Navbar({ location }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        className={`navbar ${
          location.pathname === "/addPage"
            ? "black"
            : "" || location.pathname === "/basket"
            ? "black"
            : "" || location.pathname === `/detail/${id}`
            ? "black"
            : ""
        }`}
      >
        <div className="logo">
          <NavLink to={"/"}>
            <h2>
              Pulse <span>.</span>
            </h2>
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addPage"}>Add Page</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>
        <div className="reserv">
          <h5>Reservations </h5>
          <i className="fa-solid fa-phone"></i>
          <p> 652-345 3222 11</p>
        </div>
      </div>

      <div className="resNavbar">
        <div className="row">
          <div className="logo">
            <NavLink to={"/"}>
              <h2>
                Pulse <span>.</span>
              </h2>
            </NavLink>
          </div>
          <div className="bars" onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className={`resMenu ${isOpen ? "open" : ""} `}>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addPage"}>Add Page</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
