import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function OurMenu() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(null);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function search(e) {
    setInput(e.target.value);
  }
  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }
  return (
    <div className="ourMenu">
      <div className="container">
        <div className="head">
          <div className="header">
            <i className="fa-solid fa-utensils"></i>
            <h1>Our Menu</h1>
          </div>
          <div className="search">
            <input
              type="text"
              value={input}
              onChange={search}
              placeholder="Search..."
            />
          </div>
          <div className="filter">
            <button onClick={() => setSort({ property: "name", asc: true })}>
              A-Z <i className="fa-solid fa-arrow-up-a-z"></i>
            </button>
            <button onClick={() => setSort({ property: "name", asc: false })}>
              Z-A <i className="fa-solid fa-arrow-up-z-a"></i>
            </button>
            <button onClick={() => setSort(null)}>Default</button>
            <button onClick={() => setSort({ property: "price", asc: true })}>
              Price <i className="fa-solid fa-arrow-up-1-9"></i>
            </button>
            <button onClick={() => setSort({ property: "price", asc: false })}>
              Price <i className="fa-solid fa-arrow-down-9-1"></i>
            </button>
          </div>
        </div>
        <div className="cards">
          {products
            .filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
            .sort((a, b) => {
              if (sort && sort.asc) {
                return lower(a[sort.property]) > lower(b[sort.property])
                  ? 1
                  : lower(b[sort.property]) > lower(a[sort.property])
                  ? -1
                  : 0;
              } else if (sort && sort.asc === false) {
                return lower(a[sort.property]) < lower(b[sort.property])
                  ? 1
                  : lower(b[sort.property]) < lower(a[sort.property])
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .map((x) => (
              <div className="card" key={x._id}>
                <div className="left">
                  <div className="info">
                    <h3>{x.name}</h3>
                    <i
                      className={`${
                        checkIsWishlist(x)
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                      }`}
                      onClick={() => addRemoveWishlist(x)}
                    ></i>
                    <i
                      className="fa-solid fa-cart-shopping"
                      onClick={() => addBasket(x)}
                    ></i>
                    <NavLink to={"/detail/" + x._id}>
                      <i className="fa-regular fa-eye"></i>
                    </NavLink>
                  </div>

                  <p>{x.desc}...................................</p>
                </div>
                <div className="price">
                  <h3>${x.price}.00</h3>
                </div>
              </div>
            ))}
        </div>
        <button className="see">See More</button>
      </div>
    </div>
  );
}

export default OurMenu;
