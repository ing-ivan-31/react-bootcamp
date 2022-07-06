import {useState} from "react";

interface Props {
  initialValue: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue } : Props) => {
  const [counter, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = (value: number) => {
    setCounter(prev => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1
    }));
  }

  return (
    <>
      <h1>CounterBy: {counter.counter}</h1>
      <h1>clicks: {counter.clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
    </>
  )
}