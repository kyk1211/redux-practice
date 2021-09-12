import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const initialState = () => {
  if (localStorage.length === 0) {
    return [];
  }
  return JSON.parse(localStorage.getItem('toDos'));
}

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

const reducer = (state=initialState(), action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  delToDo
};

export default store;