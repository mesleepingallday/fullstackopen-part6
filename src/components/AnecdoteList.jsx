import { useDispatch, useSelector } from "react-redux";
import { ActionCreators } from "../actionCreators";
export default function AnecdoteList() {
  const dispatch = useDispatch();
  const { vote, sort, setNotification } = ActionCreators(dispatch);
  const { anecdotes, filter } = useSelector((state) => state);
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content?.toLowerCase().includes(filter.toLowerCase())
  );
  const voteHandler = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    setNotification(`you voted '${anecdote.content}'`);
    vote({ id });
    sort();
  };
  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteHandler(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
