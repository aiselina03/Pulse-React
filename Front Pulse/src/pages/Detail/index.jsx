import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import "./style.scss"
function Detail() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="detail">
        <div className="card">
          <div className="left">
            <div className="info">
              <h3>{products.name}</h3>
              <i
                className={`${
                  checkIsWishlist(products)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }`}
                onClick={() => addRemoveWishlist(products)}
              ></i>
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => addBasket(products)}
              ></i>
            </div>

            <p>{products.desc}.......................</p>
          </div>
          <div className="price">
            <h3>${products.price}.00</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
