import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = () => {
  if (localStorage.length === 0) {
    return [];
  }
  return JSON.parse(localStorage.getItem('toDos'));
};

const toDos = createSlice({
  name:'toDosReducer',
  initialState: initialState(),
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
      localStorage.setItem('toDos', JSON.stringify(state));
      return state;
    },
    remove: (state, action) => {
      state = state.filter(toDo => toDo.id !== action.payload);
      localStorage.setItem('toDos', JSON.stringify(state));
      return state;
    },
    reset: () => {
      localStorage.clear();
      return [];
    }
  },
});

// configureStore: can use Redux Developer Tools in browser
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove, reset } = toDos.actions;

export default store;