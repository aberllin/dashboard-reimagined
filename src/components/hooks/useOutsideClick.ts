import React, { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void,
) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
