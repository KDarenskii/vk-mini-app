import { FC } from 'react';

import { FormItem, Paragraph } from '@vkontakte/vkui';

interface AgeInfoProps {
  age: number | null;
  name: string;
  isLoading?: boolean;
}

export const AgeInfo: FC<AgeInfoProps> = ({ age, name, isLoading }) => {
  if (isLoading) {
    return (
      <FormItem>
        <Paragraph weight="2">Введем поиск...</Paragraph>
      </FormItem>
    );
  }

  if (!age) {
    return (
      <FormItem>
        <Paragraph weight="2">
          Не удалось найти человека с именем: '{name}'
        </Paragraph>
      </FormItem>
    );
  }

  return (
    <FormItem>
      <Paragraph weight="2">
        Возраст человека по имени '{name}': {age}
      </Paragraph>
    </FormItem>
  );
};
