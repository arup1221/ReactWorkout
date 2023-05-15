
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Inc, Dec} from './states/reducers/index'

function App() {

  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1> React Redux </h1>
        <div style ={{width: '100%', display: 'flex', alignItems: 'center',flexDirection:'column'}}>
          <h1>{curState}</h1>
          <div>
            <button onClick={() => dispatch(Dec(5))}>Dec</button>
            <button onClick={() =>  dispatch(Inc(10))}>Inc</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
