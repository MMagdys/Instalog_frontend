import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from './layouts/AppLayout';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  return (
    <div>
      <Provider store= {store}>
        <Router>
          <AppLayout />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
