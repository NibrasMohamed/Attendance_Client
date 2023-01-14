import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Attendance from './Components/Attendance';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Attendance/> }/>
        </Routes>
    </div>
  );
}

export default App;
