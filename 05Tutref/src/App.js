
import './App.css';
import Header from './components/Header';
import { useState,useEffect,useRef } from 'react';
function App() {

  const [input,setInput] = useState("");
  // const [counter, setCounter] = useState(0);
  // const counter = useRef(0);
  // const prevState  = useRef("");
  const inputField  = useRef();

  // useEffect(()=>{
  //   counter.current = counter.current + 1;
  //   prevState.current = input;
  // },[input])

  const formHandler =(e) =>{
    setInput(e.target.value);
  }

  const clickHandler = () =>{
    // inputField.current.focus();
    inputField.current.value = "Arup";
    inputField.current.style.border = "2px solid red";
  }
  return (
   <div>
  <Header/>
  <input ref={inputField} value = {input} onChange = {formHandler}/>
  {/* <h4>Application has been rendered  {counter.current} times</h4> */}
  {/* <h4>Previous state was-- {prevState.current} </h4> */}
  <button onClick={clickHandler}>Click Me</button>
   </div>
  );
}

export default App;
