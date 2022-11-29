import './App.css'
/* import Hello from './components/Hello' */
import beersData from "./Data"
import Beers from './components/Beers'

function App() {
  return (
    <div className="App">
      <Beers data ={beersData.cards}/>  
    </div>
  );
}

export default App
