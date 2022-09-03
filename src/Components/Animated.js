import Home from './Home'
import About from './About'
import Contact from './Contact'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'

const Animated = () => {
   return (
      <AnimatePresence wait>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact-us" element={<Contact />} />
         </Routes>
      </AnimatePresence>
   )
}

export default Animated