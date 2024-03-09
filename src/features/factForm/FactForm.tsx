import { FC, FormEvent } from 'react';

import { Fact } from 'entities';

import { Button, FormItem, Input } from '@vkontakte/vkui';

import { useFactForm } from './model';

interface FactFormProps {
  onSubmit: () => Promise<Fact | undefined>;
  isDisabled?: boolean;
  isError?: boolean;
}

export const FactForm: FC<FactFormProps> = ({
  onSubmit,
  isDisabled,
  isError,
}) => {
  const { factInputRef, setFact } = useFactForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchedFact = await onSubmit();
    if (fetchedFact) {
      setFact(fetchedFact.fact);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        top="Факт"
        htmlFor="fact"
        bottom={
          isError
            ? 'Произошла ошибка, попробуйте еще раз'
            : 'Здесь отобразится полученный факт'
        }
        bottomId="factDescription"
        status={isError ? 'error' : 'default'}
      >
        <Input
          name="fact"
          id="fact"
          type="text"
          getRef={factInputRef}
          placeholder="Коты чаще всего..."
          aria-labelledby="factDescription"
          disabled={isDisabled}
        />
      </FormItem>
      <FormItem>
        <Button type="submit" size="l" stretched disabled={isDisabled}>
          {isDisabled ? 'Загрузка...' : 'Получить факт'}
        </Button>
      </FormItem>
    </form>
  );
};
