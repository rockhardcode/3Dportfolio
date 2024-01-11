import Home from './PageComponents/Home';
import About from './PageComponents/About';
import Skills from './PageComponents/Skills';
import Experience from './PageComponents/Experience';
import Projects from './PageComponents/Projects';
import ContaceMe from './PageComponents/ContactMe';
// import {AnimatePresence} from "framer-motion/dist/framer-motion"
import { AnimatePresence } from 'framer-motion';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contactme' element={<ContaceMe />} />
        </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes