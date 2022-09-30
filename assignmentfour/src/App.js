import React, {useState} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home} from './Components/Home'
import {Students} from './Components/Students'
import {Contact} from './Components/Contact'
import {Edit} from './Components/Edit'
import {AddStudent} from './Components/AddStudent'
import './App.css'

function App() {
// const[name,setName] = useState('');
// const[age,setAge] = useState('');
// const[course,setCourse] = useState('');
// const[batch,setBatch] = useState('');
// const[list,setList] = useState('');

// const handleSubmit = (e) =>{
//   const data ={name,age,course,batch};
//   setList((ls)=>[...ls,data]);
// }

  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Students/:fname/:age/:course/:batch' element={<Students />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Edit' element={<Edit />}></Route>
          <Route path='/AddStudent' element={<AddStudent />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
