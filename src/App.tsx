import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from './layouts/AppLayout';


function App() {
  return (
    <div>
      <Router>
        <AppLayout />
      </Router>
    </div>
  );
}

export default App;
