import css from "../styles/styles.module.css";
import {useProductContext} from "./ProductCard";

export const ProductTitle = ( { title, className, style }: { title?: string; className?: string; style?: React.CSSProperties }) => {
  const {product} = useProductContext();

  return ( <span className={ `${css.productDescription} ${className}`} style={{...style}}>{title ? title : product.title}</span>)
}