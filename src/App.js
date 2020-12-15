import './App.scss';
import moment from 'moment';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';
import ButtonGroup from './components/Button-group/Button-group';

function App() {

  return (
    <div className="App">
      <ButtonGroup />
      <Navbar />
      <Timer timerMinutes={25}/>
    </div>
  );
}

export default App;
