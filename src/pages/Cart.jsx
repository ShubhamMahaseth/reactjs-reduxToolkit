import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import Products from "../components/Products";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemove(product) {
    dispatch(remove(product));
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper"></div>
      {data.map((el, index) => (
        <div className="cartCard" key={index}>
          <img src={el.image} alt="" />
          <h5>{el.title}</h5>
          <h5>{el.price}</h5>
          <button
            className="btn"
            onClick={() => {
              handleRemove(el.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
