import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length
      ?
      props.stack.map((ingredient, idx) =>
          <Ingredient key={idx} idx={idx} ingredient={ingredient} removeFromBurger={props.removeFromBurger}/>

      )
      :
      <li style={{background: '#5BC3EB'}}>Please add ingredients</li>
      }
    </ul>
  )
}

export default BurgerStack