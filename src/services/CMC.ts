import api from '../config/api';

export const getCoinsList = async () => api.get('/cryptocurrency/listings/latest');
