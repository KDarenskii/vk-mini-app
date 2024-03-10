import { useCallback, useEffect, useRef } from 'react';

import { AnyFunction } from 'shared/types';

import { useLatest } from '../useLatest';

import { useDebounceCallbackDefaultConfig } from './defaultConfig';
import { UseDebounceCallbackOptions } from './types';

export const useDebounceCallback = <F extends AnyFunction>(
  callback: F,
  options: UseDebounceCallbackOptions = useDebounceCallbackDefaultConfig
) => {
  const { shouldCancelOnUnmount, delay } = {
    ...useDebounceCallbackDefaultConfig,
    ...options,
  };

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

  const cancelCallback = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (shouldCancelOnUnmount) {
        cancelCallback();
      }
    };
  }, [cancelCallback, shouldCancelOnUnmount]);

  return { cancelCallback, debouncedCallback };
};
