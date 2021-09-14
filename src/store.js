import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

//action
const addToDo = createAction("ADD");
const delToDo = createAction('DELETE');
const resetToDo = createAction('RESET');

const initialState = () => {
  if (localStorage.length === 0) {
    return [];
  }
  return JSON.parse(localStorage.getItem('toDos'));
}

const reducer = (state=initialState(), action) => {
  switch (action.type) {
    case addToDo.type:
      const addToDosLocal = [{ text: action.payload, id: Date.now() }, ...state];
      localStorage.setItem('toDos', JSON.stringify(addToDosLocal));
      return addToDosLocal;
    case delToDo.type:
      const delToDosLocal = state.filter(toDo => toDo.id !== action.payload);
      localStorage.setItem('toDos', JSON.stringify(delToDosLocal)); 
      return delToDosLocal;
    case resetToDo.type:
      localStorage.clear();
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  delToDo,
  resetToDo
};

export default store;