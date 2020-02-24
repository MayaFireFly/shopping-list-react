import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('render Button without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button func={console.log('test')} text='test'/>, div);
  });       
});