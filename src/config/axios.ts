import axios from 'axios';
import { baseURL, API_VERSION } from './constants';

const buildBaseUrl = () => `${baseURL}/${API_VERSION}/`;

const axiosInstance = axios.create({
  baseURL: buildBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
    'X-CMC_PRO_API_KEY': '0ebfce53-1eff-49bd-8756-9cb5d2295c7a',
  },
});

export default axiosInstance;
