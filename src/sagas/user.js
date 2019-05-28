import { takeEvery, call, put } from "redux-saga/effects";

import axios from "axios";

function* fetchUser() {
  const user = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/users"
  );
  yield put({ type: "FETCH_USER_SUCCESS", user: user });
}

function* fetchTodos() {
  const todos = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(todos);
}

export function* watchFetchUser() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}

export function* watchFetchTodos() {
  yield takeEvery("FETCH_TODOS_REQUEST", fetchTodos);
}
