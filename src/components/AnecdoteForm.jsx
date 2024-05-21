import { useDispatch } from "react-redux";
import { ActionCreators } from "../actionCreators";
export default function AnecdoteForm() {
  const dispatch = useDispatch();
  const { addAnecdote } = ActionCreators(dispatch);
  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    addAnecdote(content);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdoteHandler}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
}
