import { FaShoppingCart } from 'react-icons/fa'

function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <h2>amazon</h2>

      <input type="text" placeholder="Search products" />

      <div className="cart-icon">
        <FaShoppingCart />
        <span>{cartCount}</span>
      </div>
    </div>
  )
}

export default Navbar