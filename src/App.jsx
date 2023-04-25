import { useState } from 'react'
import './App.css'
import NavBar from '../src/Components/PageComponents/NavBar'
import Home from './Components/PageComponents/Home'
import About from './Components/PageComponents/About'
import Skills from './Components/PageComponents/Skills'
import Experience from './Components/PageComponents/Experience'
import Projects from './Components/PageComponents/Projects'
import ContaceMe from './Components/PageComponents/ContactMe'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
     <div className='App'>
      <NavBar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/skills' Component={Skills}/>
        <Route path='/Projects' Component={Projects}/>
        <Route path='/Experience' Component={Experience}/>       
        <Route path='/contactme' Component={ContaceMe}/> 
      </Routes>
     </div>
  )
}

export default App
