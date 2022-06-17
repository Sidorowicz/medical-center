import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Patients from './components/Patients/Patients';
import { useEffect,useState } from 'react';
import Projects from './components/Projects/Projects';
import { BottomNavigation } from '@mui/material';
import Overwiev from './components/Overview/Overwiev';
import Tests from './components/Tests/Tests';
import Introduction from './components/Introduction/Introduction';
function App() {

  
  return (
    <Router>

          <Routes>
                <Route exact path='/' element={< Introduction />}></Route>
                <Route exact path='/Overwiev' element={< Overwiev />}></Route>
                <Route exact path='/Patients' element={< Patients/> } ></Route>
                <Route exact path='/Projects' element={< Projects/> } ></Route>
                <Route exact path='/Tests' element={< Tests/> } ></Route>
          </Routes>
      <div className='Divider'></div>
      <Footer/>
    </Router>
  );
}

export default App;
