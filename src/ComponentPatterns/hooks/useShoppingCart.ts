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

      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0};

      if ( Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      // Borrar
      const { [product.id]: toDelete, ...rest } = oldShoppingCart
      return rest;


      /*if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart; // delete one element with destructuring.
        return {
          ...rest
        }
      }

      return {
        ...oldShoppingCart,
        [product.id]: {...product, count}
      }*/
    })
  }

  return {shoppingCart, onProductCountChange};
}

