import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import products from './data/products'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, product])
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <div className="main-container">
        <div className="products-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <Cart cart={cart} />
      </div>
    </div>
  )
}

export default App