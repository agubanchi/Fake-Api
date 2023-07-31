/* eslint-disable react/prop-types */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Product =({product, addToCart})=> {
  return (
    <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>{product.description}</h4>
            <p className='product-price'>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
  )
}

export default Product