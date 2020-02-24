import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';

const API_URL = process.env.API_URL;

const Product = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const product = props.product;
  const deadlineDate = product.deadline ? product.deadline.split('T')[0] : 
    new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate();
  const id = product.id ? product.id : null;

  const setProductDone = () => {
    if(id){
      const fullUrl = API_URL + 'done/' + id;
      fetch(fullUrl, { method: 'PUT' })
        .then((response)=>response.json())
        .then((jsonResponse)=>console.log('Success changing done property for product with id=' + id))
        .catch((error)=>setErrorMessage(error.message || 'Error changing done property'));
    }else{
      setErrorMessage('Product do not received');
    }
  };

  return <Wrapper>
    <div className='product'>{product.product}</div>
    <div className='product-field'>{product.count}</div>
    <div className='product-field'>{deadlineDate}</div>
    <div className='product-field product-done'>
      {product.done ? (
        <input type='checkbox' defaultChecked onClick={setProductDone}/>
      ) : (
        <input type='checkbox' onClick={setProductDone}/> 
      )}
    </div>
    <div className='App-error'>{errorMessage}</div>
  </Wrapper>;
};

Product.propTypes = {
  product:PropTypes.object
};

export default Product;