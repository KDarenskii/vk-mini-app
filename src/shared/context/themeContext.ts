import { createContext } from 'react';

export type ThemeContextState = 'light' | 'dark' | undefined;

export const ThemeContext = createContext<ThemeContextState>(undefined);
