
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Tim"} lastName = {"Spicer"} age={35} hairColor={"Brown"} />
      <PersonCard firstName={"Bruce"} lastName = {"Wayne"} age={87} hariColor = {"Black"} />
    </div>
  );
}

export default App;
