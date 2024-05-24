import { bindActionCreators } from "redux";
import {
  vote,
  addAnecdote,
  sort,
  setAnecdotes,
  appendAnecdote,
} from "./reducers/anecdoteReducer";
import { setFilter } from "./reducers/filterReducer";
import {
  setNotification,
  clearNotification,
} from "./reducers/notificationReducer";

export function ActionCreators(dispatch) {
  return bindActionCreators(
    {
      vote,
      addAnecdote,
      sort,
      setFilter,
      setNotification,
      clearNotification,
      setAnecdotes,
      appendAnecdote,
    },
    dispatch
  );
}
