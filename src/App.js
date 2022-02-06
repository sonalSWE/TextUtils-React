import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {

    const [mode, setMode] = useState('light');

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        },1500)
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert('Dark mode has been enabled', 'success');
            document.title = 'TextUtils - Darkmode';
            //setInterval(() => {
              //  document.title = 'TextUtils is amazing Mode';
            //}, 2000)
            //setInterval(() => {
              //  document.title = 'Install TextUtils';
            //}, 1500) // to catch user's eys sometime we see install anti virus etc.
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode has been enabled', 'success');
            document.title = 'TextUtils - Lightmode';
        }
    }

    return (
        <>
            <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>
            <div className="container my-3">
                <Routes>
                        {/*
                        /users --> component1   //without exact use it will always match users here and call this component
                        /users/home --> component2
                        */}
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />} />                    
                </Routes>
            </div>
            </Router>
         </>
    );
}

export default App;
