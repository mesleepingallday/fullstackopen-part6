import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const { notification } = useSelector((state) => state);
  const dispatch = useDispatch();
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
    return () => clearTimeout(timeout);
  }, [notification]);
  return notification && <div style={style}>{notification}</div>;
};

export default Notification;
