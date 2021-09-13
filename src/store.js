import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

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
      state = JSON.parse(localStorage.getItem('toDos'));
      return state;
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