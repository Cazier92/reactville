import { useState } from 'react'
import '../../styles/burger.css'

import { ingredients } from '../../data/burger-data'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

const BurgerShop = () => {
  console.log(ingredients)
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    if (ingredient.type === 'bun') {
      setStack([ingredient, ...stack, ingredient])
      console.log(stack)
    } else {
      setStack([...stack, ingredient])
      console.log(stack)
    }
  }

  const removeFromBurger = (idx, ingredient) => {
    if (ingredient.type === 'bun') {
      setStack(stack.filter((ing) => ing !== ingredient))
    } else {
      setStack(stack.filter((ing, i) => i !== idx))
    }
  }
  // const removeFromBurger = (idx) => {
  //   setStack(stack.filter((ing, i) => i !== idx))
  // }

  const clearOrder = () => {
    setStack([])
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={clearOrder}>Clear Order</button>
      </nav>
      <section>
        <IngredientList key={'IngredientList'} stack={stack} ingredients={ingredients} addToBurger={addToBurger}/>
        <BurgerStack key={'BurgerStack'} stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}

export default BurgerShop