/* eslint-disable react/prop-types */
import React from 'react'


function Cart({product}) {
  return Cart.length ? (
    <div>
      <ul>

{product?.map((cartItems)=><li key={cartItems.id}> {cartItems.title} X {cartItems.quantity} ${cartItems.totalPrice}</li>)}

      </ul>
    </div>
  ):null;
}

export default Cart