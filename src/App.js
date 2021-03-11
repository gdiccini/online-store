import React from 'react';
import Search from './services/Search';
import List from './services/List';
import ListCategories from './pages/ListCategories';

function App() {
  return (
    <div className="App">
      <Search />
      <List />
      <ListCategories />
    </div>
  );
}

export default App;
