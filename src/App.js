import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setmode] = useState('light');
  const [darktext, setdarktext] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type,
    })
      setTimeout(() => {
        setAlert(null);
      },1500);
  }
  const toggleMode =() =>{
    if(mode === 'light'){
      setmode('dark');
      setdarktext('light');
      document.body.style.backgroundColor ="#303030";
      showAlert("Dark mode is enabled","Success");
    }
    else{
      setmode('light');
      setdarktext('dark');
      document.body.style.backgroundColor ="white";
      showAlert("Light mode is enabled","Success");
        
    }
  }
  return (
    <>
      <Navbar title="Text Analyzer" mode={mode} about="about us" toggleMode={toggleMode} darktext ={darktext}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Free Text Analyzer"darktext ={darktext}  mode={mode} />
        {/* <About/> */}
     </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
