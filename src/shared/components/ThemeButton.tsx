import { FC } from 'react';

import { useSwitcherTheme, useTheme } from 'shared/hooks';

import { IconButton, VisuallyHidden } from '@vkontakte/vkui';

import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';

export const ThemeButton: FC = () => {
  const theme = useTheme();
  const toggleTheme = useSwitcherTheme();

  return (
    <IconButton onClick={toggleTheme}>
      <VisuallyHidden>Сменить тему</VisuallyHidden>
      {theme === 'light' ? <Icon28SunOutline color='black' /> : <Icon28MoonOutline />}
    </IconButton>
  );
};
