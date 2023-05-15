
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import movie from './movie.json';

function App() {
  // let login = true;
  // if(login === false){
  //   return <h1>Mai nehi dekhaunga!!!!</h1>
  // } 
  return (
    <div className="App">

    {/* {
      login === true ? <h1 style = {{color: 'black'}}>Mai nehi dekhaunga!!!!</h1> : <h1 style = {{color: 'black'}}> dek le bhai</h1>
    } */}

    {/* {
      (()=>{
        if(login===true){
          return <h1 style = {{color: 'black'}}> dek le bhai</h1>
        }
        else if(login === 'name'){
          return <h1 style = {{color: 'black'}}>hi</h1>
        }
        else{
          return <h1 style = {{color: 'black'}}> dek mat liyo galti se</h1>
        }
      })()
    } */}
        <Header />
        <div className='main'>
        {
         
          movie.map((element,index) => {
          return(
            <Movies
            key = {index}
            id = {element.imdbID} 
            title = {element.Title}
            year = {element.Year}
            img = {element.Poster}
            />
          )
          })
        }
        </div>
    </div>
  );
}

export default App;
