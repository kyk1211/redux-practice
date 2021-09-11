import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, { id }) {
  return {
    onBtnClick: () => dispatch(actionCreators.delToDo(id))
  };
}

export default connect(null, mapDispatchToProps)(ToDo);

