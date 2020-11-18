import { combineActions, handleActions } from 'redux-actions';
import actions from './actions'


const reducer = handleActions(
  {
    [combineActions(actions.increment, actions.decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  { counter: 0 }
);


export default reducer
