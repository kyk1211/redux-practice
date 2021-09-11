import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

function Detail({ toDo, onBtnClick }) {
  return (
    <>
      <h1>
        {toDo?.text}
      </h1>
      <h5>Created at: {toDo?.id}</h5>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

// withRouter를 compose 해줘야 ownProps에 history, match, location이 나타남
// withRouter를 이용해야 history 추적가능
export default compose(withRouter, connect(mapStateToProps))(Detail);