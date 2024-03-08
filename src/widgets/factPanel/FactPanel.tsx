import { FC } from 'react';

import {
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  Separator,
  View,
} from '@vkontakte/vkui';

export const FactPanel: FC = () => {
  return (
    <View activePanel="fact">
      <Panel id="fact">
        <PanelHeader></PanelHeader>
        <Group>
          <Placeholder header="А вы знали...?">
            Мы собрали для вас множество различных фактов о кошках
          </Placeholder>
          <Separator />
          <Placeholder>Введите адрес страницы в поле поиска</Placeholder>
        </Group>
      </Panel>
    </View>
  );
};
