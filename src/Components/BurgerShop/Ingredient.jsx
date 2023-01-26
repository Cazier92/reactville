
const Ingredient = (props) => {
	return (
		<li>
			{props.ingredient.name}

			{props.isList
			? <button onClick={() => props.addToBurger(props.ingredient)}>+</button>
			: <button onClick={() => props.removeFromBurger(props.idx)}>-</button>
			}
		</li>
	)
}

export default Ingredient