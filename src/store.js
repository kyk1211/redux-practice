import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

//action
const addToDo = createAction("ADD");
const delToDo = createAction('DELETE');
const resetToDo = createAction('RESET');

const initialState = () => {
  if (localStorage.length === 0) {
    return [];
  }
  return JSON.parse(localStorage.getItem('toDos'));
};

const reducer = createReducer(initialState(), {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload, id: Date.now() });
    localStorage.setItem('toDos', JSON.stringify(state));
    return state;
  },
  [delToDo]: (state, action) => {
    state = state.filter(toDo => toDo.id !== action.payload);
    localStorage.setItem('toDos', JSON.stringify(state));
    return state;
  },
  [resetToDo]: () => {
    localStorage.clear();
    return [];
  }
});
// configureStore: can use Redux Developer Tools in browser
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  delToDo,
  resetToDo
};

export default store;