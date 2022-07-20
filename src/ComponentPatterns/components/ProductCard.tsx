import css from '../styles/styles.module.css';
import {createContext, useContext } from "react";
import {useProduct} from "../hooks/useProduct";
import {ProductContextProps, Props} from "../interfaces/interfaces";

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(`Can't use "ProductContext" without an LoaderProvider!`);
  }

  return context;
}


export const ProductCard = ({ product, children }: Props) => {
  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={css.productCard}>
        {children}
      </div>
    </Provider>
  )
}
