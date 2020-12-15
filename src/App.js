import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';
import ButtonGroup from './components/Button-group/Button-group';

function App() {
  return (
    <div className="App">
      <ButtonGroup />
      <Navbar />
      <Timer />
    </div>
  );
}

export default App;
