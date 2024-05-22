import { useDispatch, useSelector } from "react-redux";
import { ActionCreators } from "../actionCreators";
export default function AnecdoteList() {
  const { anecdotes, filter } = useSelector((state) => state);
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  const { vote, sortVote } = ActionCreators(dispatch);
  const voteHandler = (id) => {
    vote(id);
    sortVote();
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
