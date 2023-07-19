
//import './App.css';
import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
function App() {
  const[mode , SetMode]=useState('dark');
  const[alert , setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);

  }
   
  const togglemode = ()=>{
    if(mode==='light')
    {
      SetMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success")
      document.title="Textutiles - Dark Mode";
    }
    else
    {
      SetMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title="Textutiles - Light Mode";
    }

  }
  return (
    <>
    
<Navbar title="Text-Editior" text="About" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>
<div className="container my-3">
<Textform showAlert={showAlert} heading="Enter Your Text" mode={mode} />
  
</div>

    </>
    
  );
}

export default App;
