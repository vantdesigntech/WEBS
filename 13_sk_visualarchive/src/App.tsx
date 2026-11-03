import { useEffect, useRef } from 'react';
import { BODY_HTML, PAGE_SCRIPTS } from './bodyHtml';

export function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'mono';
    document.documentElement.dataset.theme = savedTheme;
    document.body.className = 'body';

    const timer = setTimeout(() => {
      PAGE_SCRIPTS.forEach((code) => {
        try {
          const fn = new Function(code);
          fn();
        } catch (e) {
          console.warn('Script warning:', e);
        }
      });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}

export default App;
