import './App.css'
/* import Hello from './components/Hello' */
import beersData from "./Data"
import Beers from './components/Beers'
import Button from './components/Button'



function App() {
  return (
    <div className="App">
      <Button />
      <Beers data ={beersData.cards}/>  
    </div>
  );
}

export default App
