import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user/peru">User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<h2>Contact me</h2>} />
        <Route path="/user/:name" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
