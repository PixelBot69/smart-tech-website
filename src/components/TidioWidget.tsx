// components/TidioWidget.tsx
'use client';

import { useEffect } from 'react';

const TidioWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/sqqv8mz2frvft9xc1ui8s9u09w1qnuye.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default TidioWidget;
