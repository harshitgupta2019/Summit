import AllRoutes from './AllRoutes';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
