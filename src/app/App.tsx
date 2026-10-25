import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="page-shell">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
