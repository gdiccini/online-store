import React from 'react';
import * as api from './services/api';
import Search from './services/Search';
import List from './services/List';

function App() {
  return (
    <div className="App">
      <Search />
      <List />
    </div>
  );
}

export default App;
