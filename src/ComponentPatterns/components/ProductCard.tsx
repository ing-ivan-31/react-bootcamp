import css from '../styles/styles.module.css';
import {createContext, ReactElement, useContext} from "react";
import {useProduct} from "../hooks/useProduct";
import {onChangeArgs, Product, ProductCardCardHandlers, ProductContextProps} from "../interfaces/interfaces";

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(`Can't use "ProductContext" without an LoaderProvider!`);
  }

  return context;
}

export interface InitialValues {
  count?: number;
  maxCount?: number
}

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) =>  void
  value?: number;
  initialValues?: InitialValues;
}


export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{counter, increaseBy, product, maxCount}}>
      <div className={`${css.productCard} ${className}`} style={{...style}}>
        {children({
          count: counter,
          isMaxCountReached,
          reset,
          product,
          increaseBy,
          maxCount: initialValues?.maxCount
        })}
      </div>
    </Provider>
  )
}
