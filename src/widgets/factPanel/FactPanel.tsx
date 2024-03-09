import { FC } from 'react';

import { FactForm } from 'features';

import {
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  Separator,
  View,
} from '@vkontakte/vkui';

import { useFactPanel } from './model';

export const FactPanel: FC = () => {
  const { getFact, isError, isFetching } = useFactPanel();

  return (
    <View activePanel="fact">
      <Panel id="fact">
        <PanelHeader></PanelHeader>
        <Group>
          <Placeholder header="А вы знали...?">
            Мы собрали для вас множество различных фактов о кошках
          </Placeholder>
          <Separator />
          <FactForm
            onSubmit={getFact}
            isDisabled={isFetching}
            isError={isError}
          />
        </Group>
      </Panel>
    </View>
  );
};
