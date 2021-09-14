import React, { useState } from 'react';
import { connect } from "react-redux";
import ToDo from '../components/ToDo';
import { add, reset } from '../store';

function Home({ toDos, addToDo, resetToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} required onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}
      </ul>
      <button onClick={resetToDo}>RESET</button>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state }
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
    resetToDo: () => dispatch(reset())
  };
}

// connect has two arg: mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Home);