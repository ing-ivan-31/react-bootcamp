import css from "../styles/styles.module.css";
import {useProductContext} from "./ProductCard";

export const ProductTitle = ( { title = '' }) => {
  const {product} = useProductContext();

  return ( <span className={css.productDescription}>{title ? title : product.title}</span>)
}