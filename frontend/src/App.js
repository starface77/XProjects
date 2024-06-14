import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainJSX from './components/MainJSX';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <MainJSX />
      </Router>
    </div>
  );
}

export default App;
