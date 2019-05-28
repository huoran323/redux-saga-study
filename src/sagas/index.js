import { takeEvery, put, call, delay, all, fork } from "redux-saga/effects";
import { increment } from "../actions/counter";
import axios from "axios";

import * as counterSagas from "./counter";
// import { watchFetchUser, watchFetchTodos } from "./user";
import * as userSagas from "./user";

export default function* rootSaga() {
  // yield all([watchIncrementAsync(), watchFetchUser(), watchFetchTodos()]);
  // 循环遍历每一个，再执行fork方法, 使用fork之后就变成了并发执行，而不会按照yield的方式，顺序同步执行了
  yield all(
    [...Object.values(userSagas), ...Object.values(counterSagas)].map(fork)
  );
}

// function* incrementAsync() {
//   // 模拟异步操作
//   // yield call(delay, 2000);
//   yield delay(2000);
//   // put用来发送action
//   // yield put({ type: "INCREMENT" });
//   yield put(increment());
// }

// function* watchIncrementAsync() {
//   //监听action,触发incrementAsync函数
//   yield takeEvery("INCREMENT_ASYNC", incrementAsync);
// }

// function* fetchUser() {
//   const user = yield call(
//     axios.get,
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   console.log(user);
// }

// function* watchFetchUser() {
//   yield takeEvery("FETCH_USER_REQUEST", fetchUser);
// }

// export default function* rootSaga() {
//   yield all([watchIncrementAsync(), watchFetchUser()]);
// }
