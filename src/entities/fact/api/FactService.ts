import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Fact } from '..';

import { factApi } from './factApi';

export class FactService {
  static get = async (
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Fact>> => {
    return factApi.get('/', config);
  };
}
