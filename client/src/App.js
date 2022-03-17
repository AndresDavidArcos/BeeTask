import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Sections from "./components/Sections";
import SubjectsState from "./context/Subjects/SubjectsState"
import TaskForm from "./components/TaskForm";
import EditSection from "./components/EditSection";
import TaskDetails from "./components/TaskDetails";
import Pomodoro from "./components/Pomodoro";

function App(){

    return(
      <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/register'element={<Register/>} />
          <Route path='/login'element={<Login/>} />
          <Route path='/pomodoro'element={<Pomodoro/>} />
          <Route path='/menu/:userid'element={<Menu/>} />
          <Route path='/task/:userid/:idSUBJECT/:taskid'element={<TaskForm/>} />
          <Route path='/section/:userid/:idSUBJECT/:sectionId'element={<EditSection/>} />
          <Route path='/sections/:userid/:idSUBJECT' element={<SubjectsState> 
            <Sections/>
            </SubjectsState>} />          
          <Route path='/taskDetails/:userid/:idSUBJECT/:taskid' element={<TaskDetails/>}/>

        </Routes>
      </Router>
      </div>
    )

}

export default App;