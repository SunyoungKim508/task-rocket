import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as EXAMPLE_ACTIONS from 'common/constants/example';
import { increment } from 'common/actions/example';

export function* incrementAsync() {
  yield put(increment())
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* watchIncrementAsync() {
  yield* takeEvery(EXAMPLE_ACTIONS.INCREMENT_ASYNC, incrementAsync)
}
