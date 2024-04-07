import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import View from "./routes/View";
import Add from "./routes/Add";
import EditForm from "./routes/EditForm";
import { useState } from "react";
import { dummyData } from "./data";
import Item from "./routes/Item";
import ItemDefault from "./routes/ItemDefault";

function App() {
  const [list, setList] = useState(dummyData);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [editItem, setEditItem] = useState({});

  const DefaultPage = () => <p>Nothing to see here!</p>;

  const handlerDeleteProduct = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handlerEdit = (id) => {
    const itemToEdit = list.filter((item) => item.id === id);
    console.log("itemToEdit: ", itemToEdit);
    setEditItem(itemToEdit[0]);
    console.log("itemEdit: ", editItem);
  };

  const updateList = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: editItem.name,
          quantity: Number(editItem.quantity),
          price: Number(editItem.price),
          discount: Number(editItem.discount),
        };
      } // will find the object within the array with the id to be edited
      return item; // Return the original item if the condition doesn't match
    });
    setList(newList); // update the newList and the current state of List
  };

  const handlerAddProduct = (newProduct) => {
    setList((list) => [...list, newProduct]);
  };

  const handlerAddName = (i) => {
    setName(i);
  };
  const handlerAddQuantity = (i) => {
    setQuantity(i);
  };
  const handlerAddPrice = (i) => {
    setPrice(i);
  };
  const handlerAddDiscount = (i) => {
    setDiscount(i);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="view" element={<View list={list} />}>
              <Route index element={<ItemDefault />} />
              <Route
                path=":id"
                element={
                  <Item
                    list={list}
                    handlerDelete={handlerDeleteProduct}
                    onEdit={handlerEdit}
                  />
                }
              />
            </Route>
            <Route
              path="add"
              element={
                <Add
                  name={name}
                  quantity={quantity}
                  price={price}
                  discount={discount}
                  onAddProduct={handlerAddProduct}
                  onAddName={handlerAddName}
                  onAddQuantity={handlerAddQuantity}
                  onAddPrice={handlerAddPrice}
                  onAddDiscount={handlerAddDiscount}
                />
              }
            />
            <Route
              path="edit/:id"
              element={
                <EditForm
                  editItem={editItem}
                  editForm={setEditItem}
                  updateList={updateList}
                />
              }
            />
          </Route>
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
