import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Ponderado from "./components/Ponderado";
import Home from "./pages/Home";
function App(){

    return(
      <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/register'element={<Register/>} />
          <Route path='/login'element={<Login/>} />
          <Route path='/finalGrade/'element={<Ponderado/>} />
          

        </Routes>
      </Router>
      </div>
    )

}

export default App;