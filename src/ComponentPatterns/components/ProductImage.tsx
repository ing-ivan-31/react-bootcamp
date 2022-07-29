import noImage from "../assets/no-image.jpg";
import css from "../styles/styles.module.css";
import {useProductContext} from "./ProductCard";

export const ProductImage = ({image, className, style }: { image?: string; className?: string; style?: React.CSSProperties })=> {
  const {product} = useProductContext();

  return <img src={image ? image : product.img ?  product.img : noImage } className={`${css.productImg} ${className}`} style={{...style}} />
}