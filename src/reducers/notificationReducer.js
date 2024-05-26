import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const notification = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: "notification/setNotification",
      payload: message,
    });
    setTimeout(() => {
      dispatch({
        type: "notification/clearNotification",
      });
    }, time * 1000);
  };
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      console.log(action, "action");
      return action.payload;
    },
    clearNotification() {
      return "";
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
