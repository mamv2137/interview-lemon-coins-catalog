import axios from 'axios';
import { baseURL, API_VERSION } from './constants';
import { CMC_TOKEN } from '@env';

const buildBaseUrl = () => `${baseURL}/${API_VERSION}/`;

const axiosInstance = axios.create({
  baseURL: buildBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
    'X-CMC_PRO_API_KEY': CMC_TOKEN,
  },
});

export default axiosInstance;
