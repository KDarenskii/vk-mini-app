import { useState } from 'react';

import {
  AppRoot,
  Button,
  Cell,
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  Separator,
  SplitCol,
  SplitLayout,
  View,
  useAdaptivityConditionalRender,
  usePlatform,
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

const panels = [
  { id: 'fact', label: 'Узнать факт' },
  { id: 'age', label: 'Определить возраст' },
];

export const App = () => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();

  const [panel, setPanel] = useState(panels[0].id);

  const isVKCOM = platform === 'vkcom';

  return (
    <AppRoot>
      <SplitLayout
        style={{ justifyContent: 'center' }}
        header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}
      >
        {viewWidth.tabletPlus && (
          <SplitCol
            className={viewWidth.tabletPlus.className}
            fixed
            width={300}
            maxWidth={300}
          >
            <Panel>
              {!isVKCOM && <PanelHeader>VK Mini App</PanelHeader>}
              <Group>
                {panels.map(({ id, label }) => (
                  <Cell
                    key={id}
                    hovered={id === panel}
                    onClick={() => setPanel(id)}
                  >
                    {label}
                  </Cell>
                ))}
              </Group>
            </Panel>
          </SplitCol>
        )}

        <SplitCol width="100%" maxWidth="600px" stretchedOnMobile autoSpaced>
          <View activePanel={panel}>
            <Panel id={panels[0].id}>
              <PanelHeader></PanelHeader>
              <Group>
                <Placeholder header="А вы знали...?">
                  Мы собрали для вас множество различных фактов о кошках
                </Placeholder>
                <Separator />
                <Placeholder>Введите адрес страницы в поле поиска</Placeholder>
              </Group>
            </Panel>

            <Panel id={panels[1].id}>
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
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
