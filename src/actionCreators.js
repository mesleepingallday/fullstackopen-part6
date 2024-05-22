import { bindActionCreators } from "redux";
export function ActionCreators(dispatch) {
  const doVote = (id) => ({ type: "VOTE", data: { id } });
  const doAddAnecdote = (content) => ({
    type: "NEW_ANECDOTE",
    data: { content, votes: 0 },
  });
  const doSort = () => ({ type: "SORT" });

  const doFilter = (filter) => ({ type: "FILTER", data: filter });

  const { vote, addAnecdote, sortVote, filter } = bindActionCreators(
    {
      vote: doVote,
      addAnecdote: doAddAnecdote,
      sortVote: doSort,
      filter: doFilter,
    },
    dispatch
  );
  return { vote, addAnecdote, sortVote, filter };
}
