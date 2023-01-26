import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map((ingredient) =>
				<li><Ingredient ingredient={ingredient} isList={true} addToBurger={props.addToBurger}/></li>
			)}
		</ul>
	)
}

export default IngredientList