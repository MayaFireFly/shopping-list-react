import React from 'react';
import ReactDOM from 'react-dom';
import ProductForm from '../components/Product/ProductForm';

describe('ProductForm', () => {
  it('render ProductForm without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductForm/>, div);
  });       
});