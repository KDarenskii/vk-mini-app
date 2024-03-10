import { ChangeEvent, FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { Button, FormItem, Input } from '@vkontakte/vkui';

import { ageFormSchema } from '../helpers/validationSchema';
import { AgeFormProps, AgeFormState } from '../types/formTypes';

import { AgeInfo } from './AgeInfo';

export const AgeForm: FC<AgeFormProps> = ({
  onSubmit,
  age,
  isLoading,
  onNameChange,
}) => {
  const {
    handleSubmit: submitWrapper,
    formState: { errors },
    control,
    setValue,
  } = useForm<AgeFormState>({
    defaultValues: { name: '' },
    resolver: yupResolver(ageFormSchema),
  });

  const handleSubmit = (data: AgeFormState) => {
    onSubmit(data.name);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('name', value);
    onNameChange(value);
  };

  return (
    <form onSubmit={submitWrapper(handleSubmit)}>
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
                onChange={handleNameChange}
              />
            );
          }}
        />
      </FormItem>
      {age && <AgeInfo age={age.age} name={age.name} isLoading={isLoading} />}
      <FormItem>
        <Button type="submit" size="l" stretched>
          Узнать возраст
        </Button>
      </FormItem>
    </form>
  );
};
