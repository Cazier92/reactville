

const CategoryMenu = ({products, setProductCategory}) => {
  const categories = [...new Set(products.map((product) => product.category))]
  return (
    <select onChange={(e) => setProductCategory(e.target.value)}>
        {categories.map((category, idx) => (
          <option key={idx} value={category}>
            {category}
          </option>
        ))}
    </select>
  )
}

export default CategoryMenu