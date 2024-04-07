import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./Add.module.css";

// Add.js
function Add({
  onAddProduct,
  name,
  quantity,
  price,
  discount,
  onAddName,
  onAddQuantity,
  onAddPrice,
  onAddDiscount,
}) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name && quantity && price) {
      const newProduct = { name, quantity, price, discount, id: uuid() };
      console.log(newProduct);
      onAddProduct(newProduct);
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
          placeholder="Enter name"
          type="text"
          value={name}
          onChange={(e) => {
            onAddName(e.target.value);
          }}
        />

        <br />
        <span>Quantity: </span>
        <input
          className={styles.input}
          type="number"
          value={quantity}
          onChange={(e) => {
            onAddQuantity(Number(e.target.value));
          }}
        />
        <br />
        <span>Price: </span>
        <input
          className={styles.input}
          type="number"
          value={price}
          onChange={(e) => {
            onAddPrice(Number(e.target.value));
          }}
        />

        <br />
        <span>Discount: </span>
        <input
          className={styles.input}
          type="number"
          value={discount}
          onChange={(e) => {
            onAddDiscount(Number(e.target.value));
          }}
        />
        <br />
        <button className={styles.button}>Add product</button>
      </form>
    </>
  );
}
export default Add;
