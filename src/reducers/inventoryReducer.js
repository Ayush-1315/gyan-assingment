const inventoryReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Add":
        console.log(state,payload)
      return [...state, { id: state[state.length - 1].id++, ...payload }];
    case "Delete":
        return state.filter(({id})=>id!==payload);
    case "Edit":
        return state.map((item)=>item.id===payload.id?payload:item);
    default:
      return state;
  }
};

export default inventoryReducer