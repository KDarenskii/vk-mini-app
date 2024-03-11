import { FC } from 'react';

import { FactForm } from 'features/factForm';

import { ThemeButton } from 'shared/components';

import {
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  Separator,
  View,
  useAdaptivityConditionalRender,
} from '@vkontakte/vkui';

import { useFactPanel } from '../model/useFactPanel';

export const FactPanel: FC = () => {
  const { viewWidth } = useAdaptivityConditionalRender();

  const { getFact, isError, isLoading } = useFactPanel();

  return (
    <View activePanel="fact">
      <Panel id="fact">
        {viewWidth.tabletMinus && (
          <PanelHeader
            className={viewWidth.tabletMinus.className}
            after={<ThemeButton />}
          >
            VK Mini App
          </PanelHeader>
        )}
        {viewWidth.tabletPlus && (
          <PanelHeader
            className={viewWidth.tabletPlus.className}
            after={<ThemeButton />}
          />
        )}
        <Group>
          <Placeholder header="А вы знали...?">
            Мы собрали для вас множество различных фактов о кошках
          </Placeholder>
          <Separator />
          <FactForm
            onSubmit={getFact}
            isDisabled={isLoading}
            isError={isError}
          />
        </Group>
      </Panel>
    </View>
  );
};
