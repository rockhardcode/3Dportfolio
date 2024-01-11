import { useState } from 'react';
import './App.css';
import NavBar from '../src/Components/PageComponents/NavBar';
import Home from './Components/PageComponents/Home';
import About from './Components/PageComponents/About';
import Skills from './Components/PageComponents/Skills';
import Experience from './Components/PageComponents/Experience';
import Projects from './Components/PageComponents/Projects';
import ContaceMe from './Components/PageComponents/ContactMe';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <AnimatedRoutes/>
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contactme' element={<ContaceMe />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
