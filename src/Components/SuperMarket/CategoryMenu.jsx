

const CategoryMenu = ({products}) => {
  const categories = [...new Set(products.map((product) => product.category))]
  return (
    <select>
        {categories.map((category, idx) => (
          <option key={idx}>
            {category}
          </option>
        ))}
    </select>
  )
}

export default CategoryMenu