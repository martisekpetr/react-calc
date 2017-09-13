import { put, call, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'

import * as API from '../effects/api'
import {RESULT_RECEIVED} from "../constants/actionTypes";

export function* performOperation(action){
  const {memory: operand1, display: operand2, operation} = action.payload;


  const res = yield call(API.getResult, operation, operand1, operand2);
  console.log(`Result: ${res.result}`);


  yield put({type: RESULT_RECEIVED, payload: res.result})
}


export function* numSaga(){
  yield takeEvery(actionTypes.GET_RESULT, performOperation)
}