import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

/**
 * SSR render entry. Imported through a single tsx module graph by
 * scripts/prerender-ssr.mjs so StaticRouter and the components' useLocation/
 * Routes share one react-router instance (avoids the dual-instance context bug).
 */
export function render(route: string): string {
  return renderToString(
    <StaticRouter location={route}>
      <AppRoutes />
    </StaticRouter>
  );
}
