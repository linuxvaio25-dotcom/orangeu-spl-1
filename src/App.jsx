import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Fruits from './pages/Fruits';
import Friends from './pages/Friends';
import ContactUs from './pages/ContactUs';
import SignInSignUp from './pages/SignInSignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
