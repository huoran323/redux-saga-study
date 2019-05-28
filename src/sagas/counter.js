import { takeEvery, put, delay } from "redux-saga/effects";
import { increment } from "../actions/counter";

function* incrementAsync() {
  // 模拟异步操作
  // yield call(delay, 2000);
  yield delay(2000);
  // put用来发送action
  // yield put({ type: "INCREMENT" });
  yield put(increment());
}

export function* watchIncrementAsync() {
  //监听action,触发incrementAsync函数
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}
