
import Product from "./components/Product"

import Cart from "./components/Cart";
import './index.css'

import React, { useState, useEffect } from 'react';



function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };



  const removeCartItem = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };


  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getDerivedCart = () => {
    const derivedCart = [];
    cartItems.forEach((item) => {
      const existingItem = derivedCart.find((dItem) =>dItem.id === item.id)
      if(existingItem){
      existingItem.quantity++;
      existingItem.totalPrice += Number (item.price);
    }else{
      derivedCart.push({
        id:item.id,
        name:item.title,
        quantity:1,
        totalPrice: Number (item.price),
        
      });
    }
    return derivedCart;
  });
  }

  return (
    <>
    <h1>Mi tienda Fake</h1>
    
    { cartItems.length?

    <><h3>Productos en el carrito: {cartItems.length} </h3>
    <p className='total'>total: ${getTotalPrice(cartItems).toFixed(2)}</p></>
    :<p>No hay ningún producto seleccionado.</p>}
<Cart cart={getDerivedCart} ></Cart>
    <div className="app">
      
      <div className="product-list">
        {products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/> )}
      </div>

    
    
    </div>
    </>
  );
}

export default App;
