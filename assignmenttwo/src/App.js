import logo from './logo.svg';
import './App.css';
import ClassComponent from './Component/ClassComponent'
import {FunctionalComponent} from './Component/FunctionalComponent'
function App() {
  return (
    <div className="App">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
