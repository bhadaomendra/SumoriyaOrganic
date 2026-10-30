import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Send page_view event to GA4 on route change
    const pagePath = location.pathname + location.search;
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'virtual_page_view',
        page_path: pagePath,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
