import invetoryCSS from "./inventory.module.css";

import { useReducer } from "react";
import inventoryReducer from "../reducers/inventoryReducer";
import { useState } from "react";

const Inventory = ({ inventory, title, categories }) => {
  const [inventoryState, dispatch] = useReducer(inventoryReducer, {
    inventory,
    filteredInventory: inventory,
  });
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    quantity: 0,
    category: "",
    price: 0,
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? Number(value) : value,
    }));
  };

  const handleEdit = (item) => {
    setFormData({
      id: item.id ?? null,
      name: item.name ?? "",
      quantity: item.quantity ?? 0,
      category: item.category ?? "",
      price: item.price ?? 0,
    });
  };
  return (
    <div className={invetoryCSS.inventoryContainer}>
      <h1>{title}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.id) {
            dispatch({ type: "Edit", payload: formData });
            e.target.reset();
            setFormData({
              id: null,
              name: "",
              quantity: 0,
              category: "",
              price: 0,
            });
          } else {
            delete formData["id"];
            dispatch({ type: "Add", payload: formData });
            e.target.reset();
            setFormData({
              id: null,
              name: "",
              quantity: 0,
              category: "",
              price: 0,
            });
          }
        }}
      >
        <input
          type="number"
          placeholder="quantity"
          name="quantity"
          value={formData.quantity || 0}
          onChange={handleFormChange}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          value={formData.price || 0}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name || ""}
          onChange={handleFormChange}
        />
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleFormChange}
        >
          <option value="none" disabled={formData.category !== ""}>
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button type="submit">
          {formData.id ? "Update Item" : "Add Item"}
        </button>
      </form>
      <div>
        <div>
        Category filter{" "}
        </div>
        <select name="categoryFilter" id="categoryFilter" onChange={(e)=>dispatch({type:"Category",payload:e.target.value})}>
          <option name="0" id="0" value="none">
            All categories
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={`${invetoryCSS.table} ${invetoryCSS.header}`}>
            <span>Qty.</span>
            <span>Price</span>
            <span>Name</span>
            <span>Category</span>
          </div>
        {inventoryState.filteredInventory.map((item) => (
          <div key={item.id} className={invetoryCSS.table} style={{backgroundColor:item.quantity<10?"red":""}}>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
            <span>{item.name}</span>
            <span>{item.category}</span>
            <button
              onClick={() => {
                dispatch({ type: "Delete", payload: item.id });
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEdit(item);
              }}
            >
              Edit
            </button>
          </div>
        ))}
    </div>
  );
};

export default Inventory;
