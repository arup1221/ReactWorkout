import Header from './components/Header';
import { useState, useMemo,useCallback } from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {

  // const[count, setCount] = useState(0);
  // const [name, setName] = useState('');

  // const expensiveCalculator = (num) =>{
  //   console.log("calculating");
  //   for(let i = 0; i<1000000000;i++){}
  //   return num;
  // };

  // const calculation = useMemo(() =>
  
  // expensiveCalculator(count)
  // ,[count]);

  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const Increment = () =>{
    setCount((c) => c+1);
  };

  // const addTodo = () =>{
  //   setTodo((t) => [...t,"New Todo"]);
  // }
  const addTodo = useCallback((num) =>{
    setTodo((t) => [...t,`New Todo ${num}`]);
  },[todo]);

  return (
    <div>
      <Header/>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count: {count}</h1>
      <input onChange ={(e) => setName(e.target.value)}/>
      <h1>Name: {name}</h1> */}

      <div>
        Count: {count}
        <button onClick={Increment}>+</button>
      </div>
      <hr />
      <Todo todo ={todo} addTodo={addTodo}/>
    </div>
  );
}

export default App;
