import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../components/Product/Product';

describe('Product', () => {
  it('render Product without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Product/>, div);
  });       
});