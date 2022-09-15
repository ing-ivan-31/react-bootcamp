import css from "../styles/styles.module.css";
import {useProductContext} from "./ProductCard";
import {useCallback} from "react";

export const ProductButtons = ({ className, style } : { className?: string; style?: React.CSSProperties }) => {
  const {counter, increaseBy, maxCount} = useProductContext();

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount])

  return (
    <div className={`${css.buttonsContainer} ${className}`} style={{...style}}>
      <button className={css.buttonMinus} onClick={() => increaseBy(-1)}>-</button>

      <div className={css.countLabel}>{counter}</div>

      <button className={`${css.buttonAdd}  ${isMaxReached() && css.disabled}` }  onClick={() => increaseBy(+1)}>+</button>

    </div>
  )
}
