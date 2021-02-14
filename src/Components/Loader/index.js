import React from 'react';
import propTypes from "prop-types";
import SC from '../../styles.js';

const Loader = (props) => {
  return (
    <>
      {props.isLoading && <SC.Loader data-testid='loading'>Loading {props.product}...</SC.Loader>}
    </>
  );
}

Loader.propTypes = {
  isLoading: propTypes.bool,
  product: propTypes.string,
};
export default Loader;