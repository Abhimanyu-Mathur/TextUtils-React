import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes
// } from "react-router-dom";
// import About from './components/About';



function App() {

  const [navbarMode, setNavbarMode] = useState('light');

  const [redColor, setRedColor] = useState('notred');

  const [greenColor, setgreenColor] = useState('notgreen');

  const [navbarModeText, setNavbarModeText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const redBackground = ()=>{
    if(redColor === 'notred'){
      setRedColor('red');
      document.body.style.backgroundColor = "red";
      showAlert("Red Background has been enabled", "success");
    }
    else{
      setRedColor('notred');
      document.body.style.backgroundColor = "white";
    }
  }

  const greenBackground = ()=>{
    if(greenColor === 'notgreen'){
      setgreenColor('green');
      document.body.style.backgroundColor = "green";
      showAlert("Green Background has been enabled", "success")
    }
    else{
      setgreenColor('notgreen');
      document.body.style.backgroundColor = "white";
    }
  }

  const showAlert = (message, type)=>{
      setAlert({
        msg: message, // msg will contain message
        type:type // left side 'type' is of setAlert, right side 'type' is of showAlert
      })

      setTimeout(() => {
        setAlert(null);
        // Here we are setting setAlert to null, so that the alert vanish automatically after 2 seconds
      }, 1000);
  }

  const toggleNavbarMode = ()=>{
    if(navbarMode === 'light'){
      setNavbarMode('dark');
      setNavbarModeText('Enable Light Mode');
      showAlert("Dark mode has been enabled", "success");
      // document.title="TextUtils - Dark Mode"; 
      // Above line will change the Page title when Dark Mode is switched ON.
      document.body.style.backgroundColor = "#1f2247"

      // To flash title of the website -> Not a good practice to do so
      // setInterval(()=>{
      //   document.title = "TextUtils is amazing"
      // }, 2000)

      // setInterval(()=>{
      //   document.title = "Install TextUtils now"
      // }, 1500)
    }
    else{
      setNavbarMode('light');
      setNavbarModeText('Enable Dark Mode');
      showAlert("Light mode has been enabled", "success");
      // document.title="TextUtils - Home";
       // Above line will change the Page title when Light Mode is switched ON.
      document.body.style.backgroundColor = "white"
    }
  }


  return (

    // The below code inside the return () is called JSX.
    /* In Form, container is a Bootstrap class that provides a container, and my-5
        is used to provide margins of size 5. 
    */
    <>
    {/* <Router> */}
    <Navbar title="Country Info" homeText='Home' aboutText="About" redBackground={redBackground} mode={navbarMode} greenBackground={greenBackground}
    toggleNavbarMode={toggleNavbarMode} modeText={navbarModeText} />
    <Alert alert={alert}/>
    <div className='container my-5'> 
    {/* <Routes>
          <Route exact path="/about" element={<About />} >    </Route>
          <Route exact path="/" element={ <Form showAlert={showAlert} title='Enter text below' mode={navbarMode} redMode={redColor} greenMode={greenColor} />}>
          </Route>
    </Routes> */}
    <Form showAlert={showAlert} title='Enter text below' mode={navbarMode} redMode={redColor} greenMode={greenColor} />
    </div>
    {/* </Router> */}
   </>

    /*  Inside Route, React By DEFAULT do the partial matching of the PATH.
        If we want to do the Exact matching of the path then we need to add "exact" in front of path.
        Like, "exact path", as on Line number 106 and 107.
          */
         
  );
}

export default App;
