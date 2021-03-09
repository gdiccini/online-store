import React from 'react';
import * as api from './services/api'

function App() {
  api.getCategories().then(categories => { console.log(categories) })

  return (
    <div className="App">

    </div>
  );
}

export default App;
