import { createContext } from 'react';

export type ThemeSwitcherState = (() => void) | undefined;

export const ThemeSwitcherContext =
  createContext<ThemeSwitcherState>(undefined);
