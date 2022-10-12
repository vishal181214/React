import logo from './logo.svg';
import './App.css';
import HighOrderComponent from './components/HighOrderComponent'
import PureComponentExample from './components/PureComponent'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counter'
function App() {
  return (
    <div className="App">
      <PureComponentExample />
      <HighOrderComponent comp={<Counter/>}/>
    </div>
  );
}

export default App;
