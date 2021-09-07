import { createStore } from "redux";

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;
// state: changeable date (count)
// reducer: change data, return => data, reducer return state
// action: communicate with reducer, action need object, need 'type' property
// store.dispatch: add action to reducer
// subscribe: have function, listen change in store and run function

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

