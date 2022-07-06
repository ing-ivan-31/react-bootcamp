
import {useCounter} from "../hooks/useCounter";

interface Props {
  initialValue: number;
}

export const CounterHook = ({ initialValue } : Props) => {
  const {counter, refCounter, handleClick} = useCounter(initialValue, 20);

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={refCounter}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  )
}