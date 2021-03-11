import React, { useState } from 'react';
import Search from './services/Search';
import List from './services/List';
import ListCategories from './pages/ListCategories';
import ListProducts from './pages/ListProducts';

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <Search setProducts={ setProducts } />
      <List />
      <ListCategories />
      <ListProducts products={ products } />
    </div>
  );
}

export default App;
