import Header from "./components/Header";
// import { useReducer } from "react";
import { useState, useEffect} from 'react';
import "./App.css";
import useFetch from "./components/useFetch";

function App() {
  // const reducer = (state, action) => {
  //   if (action.type === "INC") {
  //     return state + 2;
  //   } else if (action.type === "DEC") {
  //     return state - 2;
  //   } else if (action.type === "MUL") {
  //     return state * 2;
  //   }
  //   return state;
  // };

  // const [state, dispatch] = useReducer(reducer, 0);
 

  ///////////////////////////custom hook///////////////////////////

const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");

  return (
    // <div>
    //   <Header />
    //   <h1>{state}</h1>
    //   <div className="Button">
    //     <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
    //     <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
    //     <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
    //   </div>
    // </div>

    /////////////////////////////////
    <div>
      <Header />
      {data.map((e,i)=>{
        return <h1 key={i}>{e.firstName}</h1>
      })}
    </div>
  );
}

export default App;
