import {useReducer,} from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

type CounterAction =
  | {type: 'increaseBy', payload: {value: number}}
  | {type: 'reset' };

// Action Creators
const doReset = (): CounterAction => ({
  type: 'reset'
});

const doIncreaseBy = (value:number): CounterAction => ({
  type: 'increaseBy',
  payload: { value }
});


const counterReducert = (state: CounterState, action: CounterAction): CounterState =>  {
  switch (action.type) {
    case 'reset':

      return {
        changes: 0,
        counter: 0,
        previous: 0
      }

    case 'increaseBy':
      const {value} = action.payload;
      return {
        changes: state.changes + 1,
        counter: state.counter + value,
        previous: state.counter
      }

    default:
      return state
  }
}

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducert, INITIAL_STATE);

  const handleReset = () => {
   dispatch(doReset())
  }

  const increaseBy = ( value:number ) => {
    dispatch(doIncreaseBy(value))
  }

  return (
    <>
      <h1>Counter Reducer</h1>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>

      <button onClick={handleReset}>reset</button>

      <button onClick={() => increaseBy(1)}>+1</button>

      <button onClick={() => increaseBy(5)}>+5</button>

      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  )
}