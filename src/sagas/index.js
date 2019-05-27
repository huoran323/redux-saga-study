import { takeEvery, put, call, delay } from "redux-saga/effects";
import { increment } from "../actions/counter";
import axios from "axios";

function* incrementAsync() {
  // 模拟异步操作
  yield call(delay, 2000);
  // yield delay(2000);
  // put用来发送action
  // yield put({ type: "INCREMENT" });
  yield put(increment());
}

export function* watchIncrementAsync() {
  //监听action,触发incrementAsync函数
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* fetchUser() {
  const user = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(user);
}

export function* watchFetchUser() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUser);
}
