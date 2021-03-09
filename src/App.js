import React from 'react';
import * as api from './services/api';

function App() {
  api.getCategories().then((categories) => console.log(categories));

  return (
    <div className="App">
      <h1>Teste</h1>
    </div>
  );
}

export default App;
