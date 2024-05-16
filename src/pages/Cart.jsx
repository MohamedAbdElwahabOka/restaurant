import React, { useState } from 'react';

const Cart = ({cart}) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = () => {
    // Add an item to the cart here
    setCartItemCount(cartItemCount + 1);
  }

  const placeOrder = () => {
    // Place the order here
    setCartItemCount(0);
  }

  return (
    <>

      <div id="success-message" className="mt-3"></div>
      <section id="cart" className="container mt-4">
        <h2 className="mb-4 text-center">Cart Items</h2>
        <ul id="cart-items" className="list-group">
          {/* Add your cart items here */}
          <li className="list-group-item">
            Item 1 <button className="float-right btn btn-danger btn-sm" onClick={addToCart}>Remove</button>
          </li>
          {/* Add more cart items as needed */}
        </ul>
        <div className="mt-4 text-center">
          <button id="place-order-btn" className="btn btn-primary" onClick={placeOrder}>Place Order</button>
        </div>
      </section>
    </>
  );
}

export default Cart;