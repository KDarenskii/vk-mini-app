import { UseDebounceCallbackOptions } from './types';

export const useDebounceCallbackDefaultConfig: UseDebounceCallbackOptions = {
  shouldCancelOnUnmount: true,
  delay: 300,
};
