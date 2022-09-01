import ProductCard from "../components";
import '../styles/custom-styles.css'
import {Product} from "../interfaces/interfaces";
import {useState} from "react";
import {useShoppingCart} from "../hooks/useShoppingCart";

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products = [ product, product2 ];

export interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        { products.map((product) => (
          <ProductCard product={product} onChange={ onProductCountChange} value={shoppingCart[product.id]?.count || 0 } >
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons/>
          </ProductCard>
        )) }

      </div>

      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard key={key} product={product} style={{ width: '100px'}} onChange={onProductCountChange} value={product.count}>
              <ProductCard.Image />
              <ProductCard.Buttons />
            </ProductCard>
          ))
        }
      </div>

      {JSON.stringify(shoppingCart)}
    </div>
  )
}