
import './App.css';
// import Header from './Header';
import Student from './components/Student'; 

// import {Header,Footer} from './Header'; 

function App() {
  // const arup  = "Hi NEW ARUP";
  return (
    <div className="App">
    {/* <Header/> */}
    {/* <h1> {arup}</h1>  */}
      {/* <header className="App-header"> */}
        
        {/* <p>Hi i am Arup 2</p> */}
        {/* <Footer />  */}
      {/* </header> */}
      <header className = "App-header">
    <Student
    />
    <Student name = "rik"
    age = {23} />
     <Student name = "rahul"
    age = {25} />
      </header>

    </div>
  );
}

export default App;
