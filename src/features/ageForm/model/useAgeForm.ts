import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ageFormSchema } from '../helpers/validationSchema';
import { AgeFormState } from '../types/formTypes';

export const useAgeForm = (
  onChangeCallback: (name: string) => void,
  cancelCallback: () => void
) => {
  const ageForm = useForm<AgeFormState>({
    defaultValues: { name: '' },
    resolver: yupResolver(ageFormSchema),
    mode: 'all',
  });

  const { handleSubmit: submitWrapper, watch } = ageForm;

  useEffect(() => {
    const subscription = watch(() => {
      cancelCallback();
      return submitWrapper(({ name }: AgeFormState) =>
        onChangeCallback(name)
      )();
    });
    return () => subscription.unsubscribe();
  }, [submitWrapper, watch, onChangeCallback, cancelCallback]);

  return ageForm;
};
