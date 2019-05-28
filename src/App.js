import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { increment, incrementAsync } from "./actions/counter";
import { get_user } from "./actions/user";

function App(props) {
  const { isFetching, error, user } = props.user;

  let data;

  if (error) {
    data = error;
  } else if (isFetching) {
    data = "Loading...";
  } else {
    data = user && user.data[0].name;
  }
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
      <h1>{data}</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // state中包含的数据，实在reducers/index.js中，combineReducers中的数据
    counter: state.counterReducer,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { increment, incrementAsync, get_user }
)(App);
