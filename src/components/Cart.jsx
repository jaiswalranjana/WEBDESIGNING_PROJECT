function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart-section">
      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <p>{item.title}</p>
            <p>₹{item.price}</p>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  )
}

export default Cart