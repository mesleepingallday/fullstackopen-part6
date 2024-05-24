import { useDispatch } from "react-redux";
import { ActionCreators } from "../actionCreators";
import anecdoteService from "../services/anecdotes";

export default function AnecdoteForm() {
  const dispatch = useDispatch();
  const { appendAnecdote, setNotification } = ActionCreators(dispatch);
  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    anecdoteService.createNew(content).then((anecdote) => {
      console.log("from create new", anecdote);
      appendAnecdote(anecdote);
    });
    setNotification(`you created '${content}'`);
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
