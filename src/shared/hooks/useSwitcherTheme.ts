import { useContext } from 'react';

import { ThemeSwitcherContext } from 'shared/context';

export const useSwitcherTheme = () => {
  const context = useContext(ThemeSwitcherContext);
  if (!context) {
    throw new Error(
      'useSwitcherTheme must be used within a ThemeSwitcherProvider'
    );
  }
  return context;
};
