import { useCallback, useRef } from 'react';

import { useLatest } from './useLatest';

type AnyFunction<P> = (...args: P[]) => unknown;

export const useDebounceCallback = <
  P,
  F extends AnyFunction<P> = AnyFunction<P>,
>(
  callback: F,
  delay: number = 300
) => {
  const timer = useRef<number | null>(null);
  const callbackRef = useLatest(callback);

  const debouncedCallback = useCallback(
    (...args: Parameters<F>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [callbackRef, delay]
  );

  return debouncedCallback;
};
