const inventoryReducer = (state, action) => {
  const { type, payload } = action;
  let updatedInventory;
  switch (type) {
    case "Add":
      updatedInventory = [
        ...state.inventory,
        { id: state.inventory[state.inventory.length - 1].id + 1, ...payload },
      ];
      return {
        inventory: updatedInventory,
        filteredInventory: updatedInventory,
        sortBy: state.sortBy,
      };
    case "Delete":
      updatedInventory = state.inventory.filter(({ id }) => id !== payload);
      return {
        inventory: updatedInventory,
        filteredInventory: updatedInventory,
        sortBy: state.sortBy,
      };
    case "Edit":
      updatedInventory = state.inventory.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        inventory: updatedInventory,
        filteredInventory: updatedInventory,
        sortBy: state.sortBy,
      };
    case "Category":
      if (payload !== "none") {
        return {
          ...state,
          filteredInventory: state.inventory.filter(
            ({ category }) => category === payload
          ),
          sortBy: state.sortBy,
        };
      } else {
        return {
          ...state,
          filteredInventory: state.inventory,
          sortBy: state.sortBy,
        };
      }

    case "SortBy":
      let sortedItems;
      if (state.sortBy === "") {
        sortedItems = [...state.filteredInventory].sort(
          (a, b) => a.quantity - b.quantity
        );
        return {
          ...state,
          filteredInventory: sortedItems,
          sortBy: "ascending",
        };
      } else if (state.sortBy === "ascending") {
        sortedItems = [...state.filteredInventory].sort(
          (a, b) => b.quantity - a.quantity
        );
        return {
          ...state,
          filteredInventory: sortedItems,
          sortBy: "descending",
        };
      } else {
        return { ...state, filteredInventory: state.inventory, sortBy: "" };
      }
    default:
      return state;
  }
};

export default inventoryReducer;
