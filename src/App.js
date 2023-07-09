import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert({
      type: type,
      message: message
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {

    if (mode === 'light') {

      setMode("dark")
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"

      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 1500);

    } else {

      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"

    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 mx-7">
          {/* <Routes> */}
            {/* <Route */}
              {/* exact path="/" */}
              {/* element={ */}
                <TextForm heading="Enter Text to analyse" mode={mode} showalert={showAlert} />
              {/* } */}
            {/* /> */}
            {/* <Route exact path="/about" element={<div className="container">  <About mode={mode} />  </div>} /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
