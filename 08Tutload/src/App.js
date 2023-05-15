import Header from './components/Header';
import {useState,useEffect} from 'react';
import './App.css';
import {Bars, InfinitySpin, TailSpin, ThreeCircles} from 'react-loader-spinner';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState([]);
  
  useEffect(() => {
    setLoading(true);
  async function getData(){
    const res = await fetch('https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001');
    const finalRes = await res.json();
    setData(finalRes);
    setLoading(false);
    toast.success("Successfully fetched data");
    toast.error("Successfully fetched data");
    toast.warning("Successfully fetched data");
  }
  getData();
  
  }, [])


  return (
    <div className="App">
      <Header/>
      <ToastContainer/>
      <div className='main'>
      {
        loading ?
        <Bars color = "blue" height={50}/>
        :
        data.map((e,i)=> {
          return (
            <p>{e.email}</p>
          )
        }
        )
      }
     
      </div>
      
    </div>
  );
}

export default App;
