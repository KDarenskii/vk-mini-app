import React, { ReactNode, useCallback, useState } from 'react';

import { ThemeContext, ThemeSwitcherContext } from 'shared/context';

type ThemeProviderProps = {
  children: ReactNode;
};

export const WithTheme: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcherContext.Provider value={toggleTheme}>
        {children}
      </ThemeSwitcherContext.Provider>
    </ThemeContext.Provider>
  );
};
