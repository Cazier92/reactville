import { useState } from 'react'

import '../../styles/super-market.css'

// Components & Data
import { products } from '../../data/market-data'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

const SuperMarket = () => {
  console.log('Imported product data:::', products)
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')
  const addToCart = (item) => {
    const isItemInCart = cart.some((prod) => prod.id === item.id)
    if (isItemInCart) {
      setCart(cart.map((prod) => prod.id === item.id
      ? {...prod, quantity: prod.quantity +1}
      : prod
      ))
    } else {
      setCart([{...item, quantity: 1}, ...cart])
    }
  }

  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      setCart(cart.map((i) => i.id === item.id
      ? { ...item, quantity: item.quantity -1}
      : i
      ))
    } else {
      setCart(cart.filter((i) => i.id !== item.id))
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory}/>
        <DisplayProducts products={products} productCategory={productCategory} addToCart={addToCart}/>
      </section>

      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>

    </div>
  )
}

export default SuperMarket