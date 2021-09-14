import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';
const RESET = 'RESET';

//action
const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
};

const delToDo = (id) => {
  return {
    type: DELETE,
    id
  };
};

const resetToDo = () => {
  return {
    type: RESET,
  };
};

const initialState = () => {
  if (localStorage.length === 0) {
    return [];
  }
  return JSON.parse(localStorage.getItem('toDos'));
}

const reducer = (state=initialState(), action) => {
  switch (action.type) {
    case ADD:
      const addToDosLocal = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem('toDos', JSON.stringify(addToDosLocal));
      return addToDosLocal;
    case DELETE:
      const delToDosLocal = state.filter(toDo => toDo.id !== action.id);
      localStorage.setItem('toDos', JSON.stringify(delToDosLocal)); 
      return delToDosLocal;
    case RESET:
      localStorage.clear();
      state = [];
      return state;
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