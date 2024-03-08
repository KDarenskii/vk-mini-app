import { FC } from 'react';

import {
  Button,
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  Separator,
  View,
} from '@vkontakte/vkui';

export const AgePanel: FC = () => {
  return (
    <View activePanel="age">
      <Panel id="age">
        <PanelHeader></PanelHeader>
        <Group>
          <Placeholder>Доступ запрещён</Placeholder>
          <Separator />
          <Placeholder
            header="Находите друзей"
            action={<Button size="m">Найти друзей</Button>}
          >
            Здесь будут отображаться люди, которых вы добавите в друзья
          </Placeholder>
        </Group>
      </Panel>
    </View>
  );
};
