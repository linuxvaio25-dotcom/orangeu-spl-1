import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Fruits from './pages/Fruits';
import GiftsPage from './pages/GiftsPage';
import ContactUs from './pages/ContactUs';
import SignInSignUp from './pages/SignInSignUp';
import FruitTransitionOverlay from './components/gifts/FruitTransitionOverlay';
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


function AppShell() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartMenuHidden, setIsCartMenuHidden] = useState(false);
  const [showFruitTransition, setShowFruitTransition] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('expand');
  const [transitionOrigin, setTransitionOrigin] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  function triggerFruitTransition(event) {
    const rect = event?.currentTarget?.getBoundingClientRect();

    setTransitionOrigin({
      x: rect ? rect.left + rect.width / 2 : window.innerWidth / 2,
      y: rect ? rect.top + rect.height / 2 : window.innerHeight / 2,
    });

    setTransitionPhase('expand');
    setShowFruitTransition(true);

    window.setTimeout(() => {
      setTransitionPhase('contract');
    }, 480);

    window.setTimeout(() => {
      setShowFruitTransition(false);
      navigate('/fruits');
    }, 1200);
  }

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar
          isCartOpen={isCartOpen}
          isCartMenuHidden={isCartMenuHidden}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
          <Route
            path="/gifts"
            element={<GiftsPage onNavigateToFruits={triggerFruitTransition} />}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>
        <Footer />
      </div>

      <FruitTransitionOverlay
        show={showFruitTransition}
        transitionPhase={transitionPhase}
        transitionOrigin={transitionOrigin}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
