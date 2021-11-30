import React from 'react';

import { HashRouter } from 'react-router-dom';

import RouterApp from '@/routers';

function App() {
  return (
    <div className="App px-5">
      <HashRouter>
        <RouterApp />
      </HashRouter>
    </div>
  );
}

export default App;
