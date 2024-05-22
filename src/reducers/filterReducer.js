const initialState = "";
const reducer = (state = initialState, action) => {
  console.log("ACTION: ", action);
  switch (action.type) {
    case "FILTER":
      return action.data;
    default:
      return state;
  }
};

export default reducer;
