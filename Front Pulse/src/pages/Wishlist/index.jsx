import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import "./style.scss"

function Wishlist() {
  const {addBasket} = useContext(BasketContext)
  const { wishlist, addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="wishlist">
        <div className="cards">
            {wishlist.map((x)=>(
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
      
      </div>
    </>
  );
}

export default Wishlist;
