import { bindActionCreators } from "redux";
export function ActionCreators(dispatch) {
  const doVote = (id) => ({ type: "VOTE", data: { id } });
  const doAddAnecdote = (content) => ({
    type: "NEW_ANECDOTE",
    data: { content, votes: 0 },
  });
  const doSort = () => ({ type: "SORT" });

  const { vote, addAnecdote, sortVote } = bindActionCreators(
    { vote: doVote, addAnecdote: doAddAnecdote, sortVote: doSort },
    dispatch
  );
  return { vote, addAnecdote, sortVote };
}
