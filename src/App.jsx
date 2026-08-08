import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Fruits from './pages/Fruits';
import Friends from './pages/Friends';
import ContactUs from './pages/ContactUs';
import SignInSignUp from './pages/SignInSignUp';
import './App.css';
import './styles/fruits.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.history.scrollRestoration = 'manual';
//     window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
//   }, [pathname]);

//   return null;
// }


function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartMenuHidden, setIsCartMenuHidden] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* <Navbar /> */}
        <Navbar
          isCartOpen={isCartOpen}
          isCartMenuHidden={isCartMenuHidden}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/fruits" element={<Fruits />} /> */}
          <Route
            path="/fruits"
            element={
              <Fruits
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                setIsCartMenuHidden={setIsCartMenuHidden}
              />
            }
          />
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
