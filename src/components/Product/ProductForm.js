import React from 'react';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  const id = props.productId ? props.productId : null;
  return <form></form>;
};

ProductForm.propTypes = {
  productId:PropTypes.number
};

export default ProductForm;