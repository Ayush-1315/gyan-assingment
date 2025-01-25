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
      };
    case "Delete":
        updatedInventory=state.inventory.filter(({ id }) => id !== payload)
      return {
        inventory:updatedInventory,
        filteredInventory:updatedInventory
      };
    case "Edit":
        updatedInventory=state.inventory.map((item) => (item.id === payload.id ? payload : item));
      return {
        inventory:updatedInventory,
        filteredInventory:updatedInventory
      }
    case "Category":
      if(payload!=="none"){
        return {...state,filteredInventory:state.inventory.filter(({category})=>category===payload)}
      }
      else{
        return {...state,filteredInventory:state.inventory}
      }
    default:
      return state;
  }
};

export default inventoryReducer;
