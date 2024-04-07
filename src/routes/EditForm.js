import styles from "./EditForm.module.css";
import { useNavigate } from "react-router-dom";

function EditForm({ editItem, editForm, updateList }) {
  const navigate = useNavigate();

  const updateName = (name) => {
    editForm((editItem) => ({ ...editItem, name: name }));
  };
  const updateQuantity = (quantity) => {
    editForm((editItem) => ({ ...editItem, quantity: quantity }));
  };
  const updatePrice = (price) => {
    editForm((editItem) => ({ ...editItem, price: price }));
  };
  const updateDiscount = (discount) => {
    editForm((editItem) => ({ ...editItem, discount: discount }));
  };

  function handleUpdate(event) {
    event.preventDefault();
    updateList(editItem.id);
    navigate("/view");
  }

  return (
    <div className={styles.container}>
      <h1>Edit Product</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <span>Name: </span>
          <input
            type="text"
            value={editItem.name}
            onChange={(e) => updateName(e.target.value)}
            className={styles.inputMargin}
          />
        </div>

        <div>
          <span>Quantity: </span>
          <input
            type="number"
            value={editItem.quantity}
            onChange={(e) => updateQuantity(Number(e.target.value))}
            className={styles.inputMargin}
          />
        </div>

        <div>
          <span>Price: </span>
          <input
            type="number"
            value={editItem.price}
            onChange={(e) => updatePrice(Number(e.target.value))}
            className={styles.inputMargin}
          />
        </div>

        <div>
          <span>Discount: </span>
          <input
            type="number"
            value={editItem.discount}
            onChange={(e) => updateDiscount(Number(e.target.value))}
            className={styles.inputMargin}
          />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
}

export default EditForm;
