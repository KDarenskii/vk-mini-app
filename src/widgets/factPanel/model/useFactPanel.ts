import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { FactService } from 'entities/fact';

export const useFactPanel = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { refetch, isFetching, isError } = useQuery({
    queryKey: ['fact'],
    queryFn: FactService.get,
    select: (data) => data.data,
    enabled: isSubmitted,
  });

  const getFact = async () => {
    setIsSubmitted(true);
    const fetchedFact = await refetch();
    return fetchedFact.data;
  };

  return { getFact, isFetching, isError };
};
