

const CategoryMenu = ({products}) => {
  const categories = products.map((product) => product.category)
  return (
    <select>
        {categories.map(category => 
          <option value={category}>{category}</option>
          )}
    </select>
  )
}

export default CategoryMenu