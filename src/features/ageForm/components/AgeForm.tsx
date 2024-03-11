import { FC } from 'react';

import { Controller } from 'react-hook-form';

import { Button, FormItem, Input } from '@vkontakte/vkui';

import { useAgeForm } from '../model/useAgeForm';
import { AgeFormProps } from '../types/formTypes';

import { AgeInfo } from './AgeInfo';

export const AgeForm: FC<AgeFormProps> = ({
  onSubmit,
  age,
  isLoading,
  onNameChange,
}) => {
  const {
    control,
    formState: { errors },
    handleSubmit: submitWrapper,
  } = useAgeForm(onNameChange);

  return (
    <form onSubmit={submitWrapper(({ name }) => onSubmit(name))}>
      <FormItem
        top="Имя"
        htmlFor="name"
        bottom={errors.name?.message}
        status={errors.name ? 'error' : 'default'}
        bottomId="nameDescription"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            const { ref, ...restField } = field;
            return (
              <Input
                {...restField}
                name="name"
                id="name"
                type="text"
                getRef={ref}
                placeholder="Ivan"
                aria-labelledby="nameDescription"
              />
            );
          }}
        />
      </FormItem>
      <AgeInfo
        ageInfo={age}
        isLoading={isLoading}
      />
      <FormItem>
        <Button type="submit" size="l" stretched>
          Узнать возраст
        </Button>
      </FormItem>
    </form>
  );
};
