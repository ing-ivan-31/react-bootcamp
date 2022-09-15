import { useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces";
import {ProductInCart} from "../pages/ShoppingPage";

export interface useProductArgs {
  product: Product;
  onChange?: (args:onChangeArgs) => void;
  value?: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart}>({});

  const onProductCountChange = ({count, product}: { count: number, product: Product}) => {
    setShoppingCart( (oldShoppingCart) => {

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart; // delete one element with destructuring.
        return {
          ...rest
        }
      }

      return {
        ...oldShoppingCart,
        [product.id]: {...product, count}
      }
    })
  }

  return {shoppingCart, onProductCountChange};
}

