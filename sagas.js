import { put, takeEvery, all, call } from 'redux-saga/effects'
import actions from './actions'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put(actions.increment())
}

function* watchIncrementAsync() {
    yield takeEvery(actions.incrementAsync().type, incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
