import { useEffect, useRef } from 'react';
import { BODY_HTML, PAGE_SCRIPTS } from './bodyHtml';

export default function App() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try {
      const fn = new Function(PAGE_SCRIPTS);
      fn();
      window.dispatchEvent(new Event('load'));
      window.dispatchEvent(new Event('resize'));
    } catch (err) {
      console.error('Error running original page scripts:', err);
    }
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
