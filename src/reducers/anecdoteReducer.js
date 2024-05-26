import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

export const voteForAnecdote = createAsyncThunk(
  "anecdotes/voteForAnecdote",
  async (anecdote) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const response = await anecdoteService.update(updatedAnecdote);
    return response;
  }
);
const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      console.log(action.payload, "test");
      const content = action.payload;
      state.push({
        content,
        votes: 0,
      });
    },
    vote(state, action) {
      const { id } = action.payload;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    },
    sort(state) {
      return state.sort((a, b) => b.votes - a.votes);
    },
    appendAnecdote(state, action) {
      return state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(voteForAnecdote.fulfilled, (state, action) => {
      return state.map((anecdote) =>
        anecdote.id !== action.payload.id ? anecdote : action.payload
      );
    });
  },
});

export const { addAnecdote, vote, sort, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(anecdote));
  };
};

export default anecdoteSlice.reducer;
