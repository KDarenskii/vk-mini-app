import { FC } from 'react';

import { Age } from 'entities/age';

import { FormItem, Paragraph } from '@vkontakte/vkui';

interface AgeInfoProps {
  ageInfo: Age | null;
  isLoading?: boolean;
}

export const AgeInfo: FC<AgeInfoProps> = ({ ageInfo, isLoading }) => {
  if (isLoading) {
    return (
      <FormItem>
        <Paragraph weight="2">Введем поиск...</Paragraph>
      </FormItem>
    );
  }

  if (!ageInfo) return null;

  const { age, name } = ageInfo;

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
