import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return <header className='App-header'>
    <h2>{props.text}</h2>
    {props.search}
  </header>;
};

Header.propTypes = {
  text:PropTypes.string,
  search:PropTypes.object
};

export default Header;