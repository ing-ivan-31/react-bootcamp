import ProductCard from "../components";
import '../styles/custom-styles.css'
import {Product} from "../interfaces/interfaces";

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

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={products[0]} initialValues = {{
          count: 0,
          maxCount: 10
        }}>
          {
            ({ reset, count, increaseBy, isMaxCountReached }) => (
              <>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons/>

                <button onClick={reset}>Reset</button>

                <button onClick={() => increaseBy(-2)}>-2</button>

                { !isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button> }
                <span> count: {count}</span>
              </>
            )
          }
        </ProductCard>
      </div>
    </div>
  )
}