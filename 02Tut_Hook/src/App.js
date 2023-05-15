import Header from './components/Header';
import './App.css';
import React,{useState} from 'react';

function App() {
 const [num,setNum] = useState(0);

//  function inc(){
//   setNum(num + 1);
//  }
//  function dec(){
//   setNum(num - 1);
   // for parameters
  function inc(n){ 
  setNum(num + n);
 }
 function dec(n){
  setNum(num - n);
 }
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <div className='main'>
        <h1 className='heading'>{num}</h1>
        <div className= 'buttons'>
        {/* <button className = 'btn' onClick={dec}>decrement</button>
        <button className = 'btn' onClick={inc}>increment</button> */}
        <button className = 'btn' onClick={() =>dec(2)}>decrement</button>
        <button className = 'btn' onClick={() =>inc(4)}>increment</button>
        </div>
       </div>
      </header>
    </div>
  );
}

export default App;
