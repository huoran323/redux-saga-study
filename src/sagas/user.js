import { takeEvery, call, put } from "redux-saga/effects";

import axios from "axios";

function* fetchUser() {
  try {
    const user = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    // put发送一个action,触发reducer
    yield put({ type: "FETCH_USER_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "FETCH_USER_FAILURE", error: e.message });
  }
}

function* fetchTodos() {
  const todos = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(todos);
}

export function* watchFetchUser() {
  // 监听FETCH_USER_REQUEST 的action，触发fetchUser异步请求方法
  yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}

export function* watchFetchTodos() {
  yield takeEvery("FETCH_TODOS_REQUEST", fetchTodos);
}
