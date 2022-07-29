import css from "../styles/styles.module.css";
import {useProductContext} from "./ProductCard";

export const ProductButtons = ({ className, style } : { className?: string; style?: React.CSSProperties }) => {
  const {counter, increaseBy} = useProductContext();

  return (
    <div className={`${css.buttonsContainer} ${className}`} style={{...style}}>
      <button className={css.buttonMinus} onClick={() => increaseBy(-1)}>-</button>

      <div className={css.countLabel}>{counter}</div>

      <button className={css.buttonAdd}  onClick={() => increaseBy(+1)}>+</button>

    </div>
  )
}
