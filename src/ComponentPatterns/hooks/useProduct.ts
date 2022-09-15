import {useEffect, useRef, useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces";
import {InitialValues} from "../components/ProductCard";

export interface useProductArgs {
  product: Product;
  onChange?: (args:onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const useProduct = ({product, onChange, value = 0, initialValues}: useProductArgs) => {
  const[counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  console.log(initialValues?.count, counter)

  useEffect(() => {
    if (!isMounted.current && initialValues?.count) return;
    console.log('useEffect', value, isMounted.current)
    setCounter(value)
  } , [value])

  useEffect(() => {
    isMounted.current = true;
  } , [])

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCounter( newValue )
    onChange && onChange({ count: newValue, product });
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
    reset
  };
}

