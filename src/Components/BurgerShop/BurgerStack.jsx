
const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length
      ?
      props.stack.map((item) =>
        <li>{item.name}</li>
      )
      :
      <li>Please add ingredients</li>
      }
    </ul>
  )
}

export default BurgerStack