import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Timer timerMinutes={25}/>
    </div>
  );
}

export default App;
