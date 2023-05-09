import { useState,useEffect } from "react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
function App() {
  // const [theme,setTheme] = useState("light");
  const [theme,setTheme] = useState("null");
  useEffect (()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  },[]);

  useEffect(()=>{
    if (theme=== "dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);
  const handleThemeSwitch = () =>{
    setTheme(theme==="dark" ? "light": "dark")
  };
  return (
    <header className="bg-white  dark:bg-black dark:text-white h-screen "> 
    <div className="flex justify-end">
   <button className="bg-blue-400 hover:bg-blue-600 p-2 rounded-full text-white" onClick={handleThemeSwitch}><ModeNightIcon/></button>
   </div>

   <p className="text-blue-500 text-7xl">Tailwind Css Workout</p>
   <div>
    <h1>This is title</h1>
    <h2>This is a subtitle</h2>
    <p>This is a paragraph</p>
    <a href="https://freecodecamp.org" className="text-blue-400 underline hover:text-purple-400 decoration-wavy"> This is a an acchor</a>
    <div>
      <button>This is a button</button>
    </div>
    <div className="p-2 accent-red-700">
      <input type="checkbox" id="checkbox"/>
      <label for="checkbox">Checkbox</label>
    </div>
    <div>
      <select className="text-black bg-white dark:text-white dark:bg-black">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
    <h1>This is title</h1>
    <h2>This is a subtitle</h2>
   </div>
   </header>
  );
}

export default App;
