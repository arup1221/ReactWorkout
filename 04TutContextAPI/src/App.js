import Header from './components/Header';
import './App.css';
import ComA from './components/ComA'
import { useState, createContext } from 'react';

const AppState = createContext();
const NameContext = createContext();

function App() {
  const [data, setData] = useState("arya");
  const [name, setName] = useState({naam:'Arup', age:20});
  return (
    <>
    <AppState.Provider value={{data}}>
    <NameContext.Provider value={name}>
      <Header/>
      {/* <ComA data = {data}/> */}
      <ComA />
      </NameContext.Provider>
      </AppState.Provider>
    </>
  );
}

export default App;
export {AppState}
export {NameContext}
