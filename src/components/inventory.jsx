import { useReducer } from "react";
import inventoryReducer from "../reducers/inventoryReducer";
import { useState } from "react";

const Inventory = ({ invertory, title }) => {
  const [inventoryState, dispatch] = useReducer(inventoryReducer, invertory);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    quantity: 0,
    category: "",
    price: 0,
  });
  console.log(formData);
  return (
    <div>
      <h1>{title}</h1>
      <form
        action="#"
        onChange={(e) =>
          setFormData((prev) => {
            if (e.target.name === "quantity" || e.target.name === "price") {
              return { ...prev, [e.target.name]: Number(e.target.value) };
            } else {
              return { ...prev, [e.target.name]: e.target.value };
            }
          })
        }
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "Add", payload: formData });
          e.target.reset();
        }}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          defaultValue={formData.name}
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          defaultValue={formData.category}
        />
        <input
          type="number"
          placeholder="quantity"
          name="quantity"
          defaultValue={Number(formData.quantity)}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          defaultValue={formData.price}
        />
        <button>Submit</button>
      </form>
      <ul>
        {inventoryState.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.category}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
            <button
              onClick={() => {
                dispatch({ type: "Delete", payload: item.id });
              }}
            >
              Delete
            </button>
            <button
              onClick={() =>
                setFormData(() => ({
                  ...item,
                  price: item.price ?? 0,
                  quantity: item.quantity ?? 0,
                }))
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
