import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './pages/home';
import Login from './pages/LoginPage';
import Contact from './pages/Contactus'
import Blog from './pages/blogs'

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/actualiteBlog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
