import css from '../styles/styles.module.css';
import {createContext, ReactElement, useContext} from "react";
import {useProduct} from "../hooks/useProduct";
import {onChangeArgs, Product, ProductContextProps} from "../interfaces/interfaces";

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(`Can't use "ProductContext" without an LoaderProvider!`);
  }

  return context;
}

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) =>  void
  value?: number;
}


export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
  const {counter, increaseBy} = useProduct({ onChange, product, value });

  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={`${css.productCard} ${className}`} style={{...style}}>
        {children}
      </div>
    </Provider>
  )
}
