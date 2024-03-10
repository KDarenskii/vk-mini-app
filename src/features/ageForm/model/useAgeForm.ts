import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ageFormSchema } from '../helpers/validationSchema';
import { AgeFormState } from '../types/formTypes';

export const useAgeForm = (onChangeCallback: (name: string) => void) => {
  const ageForm = useForm<AgeFormState>({
    defaultValues: { name: '' },
    resolver: yupResolver(ageFormSchema),
    mode: 'all',
  });

  const { handleSubmit: submitWrapper, watch } = ageForm;

  useEffect(() => {
    const subscription = watch(() =>
      submitWrapper(({ name }: AgeFormState) => onChangeCallback(name))()
    );
    return () => subscription.unsubscribe();
  }, [submitWrapper, watch, onChangeCallback]);

  return ageForm;
};
