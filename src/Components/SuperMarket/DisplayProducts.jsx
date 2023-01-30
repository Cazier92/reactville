import Product from "./Product"

const DisplayProducts = ({products, productCategory}) => {
  const selectedProducts = products.map((product, idx) => {
    return product.category === productCategory &&
    <Product 
      key={idx}
      product={product}
    />
  })
  return (
    <div className="product-list">
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
