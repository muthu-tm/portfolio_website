import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import PointerFX from './components/site/PointerFX';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';

/**
 * Router-agnostic app tree (providers + routes). Wrapped by a BrowserRouter in
 * the browser (App.tsx) and by a StaticRouter during SSR prerendering, so the
 * same markup renders in both. Keep no router here.
 *
 * `.ent` turns on the site design scope (src/styles/enterprise.css): sharp
 * corners, circuit-trace line motif, brand-bar rules, illustration frames.
 */
export default function AppRoutes() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <PointerFX />
      <div className="page-shell ent">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
