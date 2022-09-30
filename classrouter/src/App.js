import './App.css';
import FormClassComp from './Components/FormClassComp'
import DisplayClass from './Components/DisplayClass'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<FormClassComp />}></Route>
          <Route path='/DisplayClass' element={<DisplayClass />}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
