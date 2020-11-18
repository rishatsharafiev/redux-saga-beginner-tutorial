import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'

import rootSaga from './sagas'
import actions from './actions'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().counter}
      onIncrement={() => store.dispatch(actions.increment())}
      onDecrement={() => store.dispatch(actions.decrement())}
      onIncrementAsync={() => store.dispatch(actions.incrementAsync())} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
