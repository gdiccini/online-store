import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from './api';

const Search = ({ setProducts }) => {
  const [search, setSearch] = useState('');

  const onKeyPress = ({ key }) => {
    if (key === 'Enter') {
      search();
    }
  };

  const searchProducts = () => {
    getProductsFromCategoryAndQuery(null, search).then((data) => {
      setProducts(data.results);
    });
  };

  return (
    <>
      <input
        type="text"
        data-testid="query-input"
        value={ search }
        onChange={ (data) => setSearch(data.target.value) }
        onKeyPress={ (data) => onKeyPress(data) }
      />
      <button type="button" data-testid="query-button" onClick={ () => searchProducts() }>
        PESQUISAR
      </button>
    </>
  );
};

Search.propTypes = {
  setProducts: PropTypes.func,
};
Search.defaultProps = {
  setProducts: () => {},
};
export default Search;
