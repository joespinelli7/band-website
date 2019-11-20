import { useEffect } from 'react';

const useScript = url => {
  // useEffect works similar to componentDidMount
  // used in Home.js
  useEffect(() => {
    // create script element on page so I can render twitter timeline each time component renders
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;
