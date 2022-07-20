import noImage from "../assets/no-image.jpg";
import css from "../styles/styles.module.css";
import {useProductContext} from "./ProductCard";

export const ProductImage = ({image = ''}) => {
  const {product} = useProductContext();

  return <img src={image ? image : product.img ?  product.img : noImage } className={css.productImg} />
}