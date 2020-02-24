import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const executor = props.func;
  const text = props.text;

  return <button className='btn' onClick={executor}>{text}</button>;
};

Button.propTypes = {
  func:PropTypes.func,
  text:PropTypes.string
};

export default Button;