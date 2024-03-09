import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Age } from '../types/age';

import { ageApi } from './ageApi';

export class AgeService {
  static getByName = async (
    name: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Age>> => {
    return ageApi.get('', { params: { name }, ...config });
  };
}
