import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { navList } from 'shared/config';

import { Cell, Group, Panel, PanelHeader, usePlatform } from '@vkontakte/vkui';

export const NavSidebar: FC = () => {
  const { pathname } = useLocation();
  const platform = usePlatform();

  const isVKCOM = platform === 'vkcom';

  return (
    <Panel>
      {!isVKCOM && <PanelHeader>VK Mini App</PanelHeader>}
      <Group>
        {navList.map(({ id, label, path, Icon }) => (
          <Link to={path} key={id} style={{ textDecoration: 'none' }}>
            <Cell
              hovered={pathname.includes(path)}
              onClick={() => {}}
              before={Icon}
            >
              {label}
            </Cell>
          </Link>
        ))}
      </Group>
    </Panel>
  );
};
