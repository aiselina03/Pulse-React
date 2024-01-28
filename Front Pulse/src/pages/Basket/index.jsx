import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../context/basketContext";
import "./style.scss";

function Basket() {
  const { basket, removeBasket, getTotal, decreaseCount, increaseCount } =
    useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="basket">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((x) => (
                <tr key={x._id}>
                  <td>{x.name}</td>
                  <td>{x.desc}</td>
                  <td>${x.price}</td>
                  <td>
                    <i
                      className="fa-solid fa-chevron-left"
                      onClick={() => decreaseCount(x)}
                    ></i>
                    {x.count}
                    <i
                      className="fa-solid fa-chevron-right"
                      onClick={() => increaseCount(x)}
                    ></i>
                  </td>
                  <td>${x.price * x.count}</td>
                  <td>
                    <button onClick={() => removeBasket(x)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="total">
          <h2>Total Price: ${getTotal()}</h2>
        </div>
      </div>
    </>
  );
}

export default Basket;
