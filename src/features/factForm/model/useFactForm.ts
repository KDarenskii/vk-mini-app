import { useRef } from 'react';

export const useFactForm = () => {
  const factInputRef = useRef<HTMLInputElement>(null);

  const setFact = (fact: string) => {
    if (factInputRef.current) {
      factInputRef.current.value = fact;
      factInputRef.current.disabled = false;
      factInputRef.current.scrollLeft = 0;

      const firstSpaceIndex = fact.indexOf(' ');

      const cursorIndex =
        firstSpaceIndex === -1 ? fact.length : firstSpaceIndex;

      factInputRef.current.setSelectionRange(cursorIndex, cursorIndex);

      factInputRef.current.focus();
    }
  };

  return { factInputRef, setFact };
};
