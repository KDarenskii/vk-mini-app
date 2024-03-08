import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Cell, Group, Panel, PanelHeader, usePlatform } from '@vkontakte/vkui';

import { panelsList } from '../constants/panelsList';

export const NavSidebar: FC = () => {
  const { pathname } = useLocation();
  const platform = usePlatform();

  const isVKCOM = platform === 'vkcom';

  return (
    <Panel>
      {!isVKCOM && <PanelHeader>VK Mini App</PanelHeader>}
      <Group>
        {panelsList.map(({ id, label, path }) => (
          <Link to={path} key={id} style={{ textDecoration: 'none' }}>
            <Cell hovered={pathname.includes(path)} onClick={() => {}}>
              {label}
            </Cell>
          </Link>
        ))}
      </Group>
    </Panel>
  );
};
