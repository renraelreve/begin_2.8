import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./Add.module.css";
import { useState } from "react";

// Add.js
function Add({ onAddProduct }) {
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
    discount: 0,
  });

  const newProductHandler = (e) => {
    setNewProduct((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (newProduct.name && newProduct.quantity && newProduct.price) {
      const newProduct_WID = { ...newProduct, id: uuid() };
      console.log(newProduct_WID);
      onAddProduct(newProduct_WID);
      navigate("/view");
    } else {
      alert("Please complete the entries before adding product!");
    }
  }

  return (
    <>
      <h2>Add</h2>
      <form onSubmit={handleSubmit} className={styles.container}>
        <span>Name: </span>
        <input
          className={styles.input}
          name="name"
          placeholder="Enter name"
          type="text"
          value={newProduct.name}
          onChange={newProductHandler}
        />

        <br />
        <span>Quantity: </span>
        <input
          className={styles.input}
          name="quantity"
          type="number"
          value={newProduct.quantity}
          onChange={newProductHandler}
        />
        <br />
        <span>Price: </span>
        <input
          className={styles.input}
          name="price"
          type="number"
          value={newProduct.price}
          onChange={newProductHandler}
        />

        <br />
        <span>Discount: </span>
        <input
          className={styles.input}
          name="discount"
          type="number"
          value={newProduct.discount}
          onChange={newProductHandler}
        />
        <br />
        <button className={styles.button}>Add product</button>
      </form>
    </>
  );
}
export default Add;
