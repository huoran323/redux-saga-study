import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { increment } from "./actions/counter";

function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>{props.counter}</h1>
      <p>
        <button onClick={props.increment}>+</button>
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
  { increment }
)(App);
