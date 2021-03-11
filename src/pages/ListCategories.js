import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/api';

const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  return (
    categories.map((category) => (
      <li key={ category.id } data-testid="category">
        {category.name}
      </li>
    ))
  );
};

export default ListCategories;
