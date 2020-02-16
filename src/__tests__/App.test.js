import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';

describe('App', () => {
  it('render App without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });       
});