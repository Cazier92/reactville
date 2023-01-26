import { useState } from 'react'
import '../../styles/burger.css'

import { ingredients } from '../../data/burger-data'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

const BurgerShop = () => {
  console.log(ingredients)
  const [stack, setStack] = useState([])
  
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} addToBurger={addToBurger}/>
        <BurgerStack stack={stack} />
      </section>
    </div>
  )
}

export default BurgerShop