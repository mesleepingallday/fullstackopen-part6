import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators } from "../actionCreators";
import { voteForAnecdote } from "../reducers/anecdoteReducer";
import { notification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";
export default function AnecdoteList() {
  const dispatch = useDispatch();
  const { sort, setAnecdotes } = ActionCreators(dispatch);
  const { anecdotes, filter } = useSelector((state) => state);
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content?.toLowerCase().includes(filter.toLowerCase())
  );
  const voteHandler = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(notification(`you voted '${anecdote.content}'`, 2));
    dispatch(voteForAnecdote(anecdote));
    sort();
  };
  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => {
      setAnecdotes(anecdotes);
    });
  }, []);
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
