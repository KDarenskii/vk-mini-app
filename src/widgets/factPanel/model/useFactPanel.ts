import { useEffect, useState } from 'react';

import { FactService } from 'entities/fact';

import { queryClient } from 'shared/config';

export const useFactPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getFact = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const { data } = await queryClient.fetchQuery({
        queryKey: ['fact'],
        queryFn: ({ signal }) => FactService.get({ signal }),
      });
      return data;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      queryClient.cancelQueries({ queryKey: ['fact'] });
    };
  }, []);

  return { getFact, isLoading, isError };
};
