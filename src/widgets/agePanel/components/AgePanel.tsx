import { FC } from 'react';

import { AgeForm } from 'features/ageForm';

import { ThemeButton } from 'shared/components';

import {
  Banner,
  Div,
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  Separator,
  View,
  useAdaptivityConditionalRender,
} from '@vkontakte/vkui';

import { useAgePanel } from '../model/useAgePanel';

export const AgePanel: FC = () => {
  const { viewWidth } = useAdaptivityConditionalRender();

  const {
    age,
    getAgeByName,
    isError,
    isLoading,
    cancelCallback,
    debouncedGetAge,
  } = useAgePanel();

  return (
    <View activePanel="age">
      <Panel id="age">
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
          <Placeholder header="А сколько ему лет...?">
            С помощью секретных технологий мы можем определить возраст, узнав
            лишь только имя
          </Placeholder>
          <Separator />
          {isError && (
            <Div>
              <Banner
                mode="image"
                background={<div style={{ backgroundColor: '#ff5c5c' }}></div>}
                style={{ textAlign: 'center' }}
                header="Произошла техническая ошибка"
                subheader="Пожалуйста, попробуйте еще раз"
              />
            </Div>
          )}
          <AgeForm
            onSubmit={getAgeByName}
            onNameChange={debouncedGetAge}
            cancelCallback={cancelCallback}
            age={age}
            isLoading={isLoading}
          />
        </Group>
      </Panel>
    </View>
  );
};
