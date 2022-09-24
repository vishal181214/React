import logo from './logo.svg';
import './App.css';
import {Functionalcomponent} from './Component/Functionalcomponent'
import Classcomponent from './Component/Classcomponent'

function App() {
  return (
    <div className="App">
      <h1>Styling using Functional and Class Component</h1>
      <div className='algn'>
      <Functionalcomponent />
      <Classcomponent />
      </div>
    </div>
  );
}

export default App;
