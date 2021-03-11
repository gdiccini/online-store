import React from 'react';

const ListProducts = ({ products }) => (
  products.map((product) => (
    <li key={ product.id } data-testid="product">
      {product.title}
    </li>
  ))
);

export default ListProducts;
