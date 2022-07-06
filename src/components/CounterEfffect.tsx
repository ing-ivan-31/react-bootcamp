import {useEffect, useRef, useState} from "react";
import {gsap} from 'gsap';

interface Props {
  initialValue: number;
}

const MAXIMUM_COUNT = 20;

export const CounterEffect = ({ initialValue } : Props) => {
  const [counter, setCounter] = useState(initialValue);
  const refCounter = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter( prevState => Math.min(prevState + 1, MAXIMUM_COUNT))
  }

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;

    const timeline = gsap.timeline();

    timeline.to(refCounter.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(refCounter.current, { y: 0, duration: 1, ease: 'bounce.out' })

  } , [counter])

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={refCounter}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  )
}