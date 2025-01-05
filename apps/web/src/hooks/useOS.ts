import { useRef } from 'react';

type OS = 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS' | 'Unknown';

export const useOS = () => {
  const osRef = useRef<OS | null>(null);

  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Windows') !== -1) {
      osRef.current = 'Windows';
    } else if (userAgent.indexOf('Mac') !== -1) {
      osRef.current = 'Mac';
    } else if (userAgent.indexOf('Linux') !== -1) {
      osRef.current = 'Linux';
    } else if (userAgent.indexOf('Android') !== -1) {
      osRef.current = 'Android';
    } else if (userAgent.indexOf('iOS') !== -1) {
      osRef.current = 'iOS';
    } else {
      osRef.current = 'Unknown';
    }
  }

  return osRef.current;
};
