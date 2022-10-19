import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home} from './Components/Home'
import Students from './Components/Students'
import {Contact} from './Components/Contact'
import {Edit} from './Components/Edit'
import {AddStudent} from './Components/AddStudent'
import Info from './Container/Info'
import './App.css'
function App() {
  return (
    <Info>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Students' element={<Students />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Edit/:id' element={<Edit />}></Route>
            <Route path='/AddStudent' element={<AddStudent />}></Route>
          </Routes>
        </Router> 
      </div>
    </Info>
  );
}

export default App;
