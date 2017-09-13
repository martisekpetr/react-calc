import { fork, all } from 'redux-saga/effects';

import { numSaga } from './numSaga'

export default function*() {
  yield all(
    [
      fork(numSaga)
    ]
  );
}
