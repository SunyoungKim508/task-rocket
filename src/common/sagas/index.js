// Basics
import { fork } from 'redux-saga/effects';
import example from 'common/sagas/example';

const sagas = [
  ...example,
];

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}
