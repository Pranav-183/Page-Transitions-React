import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Animated from './Components/Animated'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Animated />
      </Router>
    </div>
  );
}

export default App;
