import React, { ReactNode, useCallback, useState } from 'react';

import { ThemeContext, ThemeSwitcherContext } from 'shared/context';

import { useAppearance } from '@vkontakte/vkui';

type ThemeProviderProps = {
  children: ReactNode;
};

export const WithTheme: React.FC<ThemeProviderProps> = ({ children }) => {
  const appearance = useAppearance();

  const [theme, setTheme] = useState<'light' | 'dark'>(appearance);

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
