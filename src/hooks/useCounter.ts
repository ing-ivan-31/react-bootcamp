import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const useCounter = (initialValue: number, maxValue: number) => {
  const [counter, setCounter] = useState(initialValue);
  const refCounter = useRef<HTMLHeadingElement>(null);
  const refTimeline = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter( prevState => Math.min(prevState + 1, maxValue))
  }

  useLayoutEffect(() => {
    if (!refCounter.current) return;

    refTimeline.current.to(refCounter.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(refCounter.current, { y: 0, duration: 1, ease: 'bounce.out' })

  }, [])

  return {
    counter,
    refCounter,
    handleClick
  }
}