import { useEffect, useState } from 'react';

import { Age, AgeService } from 'entities/age';

import { queryClient } from 'shared/config';
import { isCancelError } from 'shared/helpers';
import { useDebounceCallback } from 'shared/hooks';

export const useAgePanel = () => {
  const [age, setAge] = useState<Age | null>(null);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentFetchingName, setCurrentFetchingName] = useState<string | null>(
    null
  );

  const getAgeByName = async (name: string) => {
    setIsLoading(true);
    setError(false);
    setCurrentFetchingName(name);
    try {
      const { data } = await queryClient.fetchQuery({
        queryKey: ['age', name],
        queryFn: ({ signal }) => AgeService.getByName(name, { signal }),
        staleTime: 1000 * 60 * 5,
      });
      setAge(data);
    } catch (error) {
      if (!isCancelError(error)) {
        setError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedGetAge = useDebounceCallback<{ name: string }>(({ name }) => {
    getAgeByName(name);
  }, 3000);

  useEffect(() => {
    return () => {
      queryClient.cancelQueries({ queryKey: ['age', currentFetchingName] });
    };
  }, [currentFetchingName]);

  return { age, getAgeByName, debouncedGetAge, isError, isLoading };
};
