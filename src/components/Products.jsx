import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => {
          console.log(err);
        });
    };
    fetchProducts();
  }, []);

  function handleAdd(el) {
    dispatch(add(el));
  }

  console.log("======>", products);
  return (
    <div className="productsWrapper">
      {products.map((el, index) => (
        <div className="card" key={index}>
          <img src={el.image} alt="notFound" />
          <h4>{el.title}</h4>
          <h5>{el.price}</h5>
          <button
            className="btn"
            onClick={() => {
              handleAdd(el);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
