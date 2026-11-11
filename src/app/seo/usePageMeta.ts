import { useEffect } from 'react';
import { PAGE_META, SITE_URL } from './pageMeta';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Keeps <title>, description, canonical and social tags in sync on client-side
 * navigation. The prerendered HTML already carries the same values per route.
 */
export function usePageMeta(path: string) {
  useEffect(() => {
    const m = PAGE_META[path];
    if (!m) return;
    const url = `${SITE_URL}${m.path === '/' ? '/' : m.path}`;
    document.title = m.title;
    setMeta('meta[name="description"]', 'content', m.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', m.title);
    setMeta('meta[property="og:description"]', 'content', m.description);
    setMeta('meta[name="twitter:title"]', 'content', m.title);
    setMeta('meta[name="twitter:description"]', 'content', m.description);
  }, [path]);
}
