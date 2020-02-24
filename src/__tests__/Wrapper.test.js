import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from '../components/Wrapper/Wrapper';

describe('Wrapper', () => {
  it('render Wrapper without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Wrapper/>, div);
  });       
});