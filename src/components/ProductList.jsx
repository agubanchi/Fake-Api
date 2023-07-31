import React, { useState, useEffect } from 'react';

import Product from './Product';

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

  return (
    <div className="app">
      <h1>Productos</h1>
      <div className="product-list">
        {products.map(product => <Product key={product.id} prod={product} addCart={addToCart}/> )}
      </div>

      <h2>Carrito de Compras</h2>
      <p>Productos en el carrito: {[cartItems.length]}</p>
      <div className="cart">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
             <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            
            <p>Precio: ${item.price}</p>
            <button onClick={() => removeCartItem(item)}>Eliminar</button>
          </div>
        ))}
        <p className='total'>Total: ${getTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
