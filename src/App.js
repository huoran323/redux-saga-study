import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { increment, incrementAsync } from "./actions/counter";
import { get_user } from "./actions/user";

function App(props) {
  return (
    <div className="App">
      <h1>{props.counter}</h1>
      <p>
        <button onClick={props.increment}>+</button>
        <br />
        <button onClick={props.incrementAsync}>Async +</button>
        <br />
        <button onClick={props.get_user}>Get User</button>
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // state中包含的数据，实在reducers/index.js中，combineReducers中的数据
    counter: state.counterReducer
  };
};

export default connect(
  mapStateToProps,
  { increment, incrementAsync, get_user }
)(App);
