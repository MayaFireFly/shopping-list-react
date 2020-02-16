import React from 'react';

const Product = (props) => {
  const product = props.product;  

  return <div className='product-wrapper'>
    <div className='product'>{product.product}</div>
    <div className='product-field'>{product.count}</div>
    <div className='product-field'>{product.deadline}</div>
    <div className='product-field product-done'>
      {product.done ? (
        <input type='checkbox' checked/>
      ) : (
        <input type='checkbox'/> 
      )}
    </div>
  </div>;
};

export default Product;