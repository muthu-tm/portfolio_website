import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to the top whenever the route path changes. React Router keeps
 * the previous scroll position on client navigation, so without this a deep
 * link clicked from a scrolled page would open mid-page. SSR-safe: the effect
 * never runs on the server, and we guard `window`.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname]);

  return null;
}
