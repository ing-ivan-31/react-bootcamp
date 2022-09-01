import {useEffect, useRef, useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces";

export interface useProductArgs {
  product: Product;
  onChange?: (args:onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({product, onChange, value = 0}: useProductArgs) => {
  const[counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value)
  } , [value])

  const increaseBy = (value: number) => {
    if (isControlled.current && onChange) {
      return onChange({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0)
    setCounter( newValue )
    onChange && onChange({ count: newValue, product });
  }

  return {counter, increaseBy};
}

