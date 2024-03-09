import { FC } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { navList } from 'shared/config';

import {
  Tabbar,
  TabbarItem,
  useAdaptivityConditionalRender,
} from '@vkontakte/vkui';

export const NavBottomBar: FC = () => {
  const { pathname } = useLocation();
  const { viewWidth } = useAdaptivityConditionalRender();
  const navigate = useNavigate();

  if (!viewWidth.tabletMinus) {
    return null;
  }

  return (
    <Tabbar className={viewWidth.tabletMinus.className}>
      {navList.map(({ id, label, path, Icon }) => (
        <TabbarItem
          key={id}
          data-story={id}
          onClick={() => navigate(path)}
          selected={pathname.includes(path)}
          text={label}
        >
          {Icon}
        </TabbarItem>
      ))}
    </Tabbar>
  );
};
