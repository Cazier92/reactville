
const Ingredient = (props) => {
	return (
		<li style={props.disabled ? {background: 'darkgray'} : {background: props.ingredient.color}}>
			{props.ingredient.name}

			{props.isList
			? <button 
			disabled={props.disabled} 
			onClick={() => props.addToBurger(props.ingredient, props.idx)}
			>+</button>
			: <button onClick={() => props.removeFromBurger(props.idx, props.ingredient)}>-</button>
			}
		</li>
	)
}

export default Ingredient