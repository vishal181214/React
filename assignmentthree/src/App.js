import logo from './logo.svg';
import React from 'react';
import './App.css';
import {FinalForm} from './Components/FinalForm'
import {FormData} from './Components/FormData'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<FinalForm/>}/>
          <Route exact path='FormData' element={<FormData/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
