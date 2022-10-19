import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home} from './Components/Home'
import {Students} from './Components/Students'
import {Contact} from './Components/Contact'
import  Edit from './Components/Edit'
import {AddStudent} from './Components/AddStudent'
import Store from './Container/Store'
import { Provider } from 'react-redux'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={Store}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Students' element={<Students />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Edit' element={<Edit />}></Route>
            <Route path='/AddStudent' element={<AddStudent />}></Route>
          </Routes>
        </Provider>
      </Router>
      
    </div>
  );
}

export default App;
