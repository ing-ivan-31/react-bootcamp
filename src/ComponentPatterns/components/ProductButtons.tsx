import css from "../styles/styles.module.css";
import {useProductContext} from "./ProductCard";

export const ProductButtons = () => {
  const {counter, increaseBy} = useProductContext();

  return (
    <div className={css.buttonsContainer}>
      <button className={css.buttonMinus} onClick={() => increaseBy(-1)}>-</button>

      <div className={css.countLabel}>{counter}</div>

      <button className={css.buttonAdd}  onClick={() => increaseBy(+1)}>+</button>

    </div>
  )
}
