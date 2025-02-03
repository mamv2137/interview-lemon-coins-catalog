import api from '../config/api';

export const getCoinsList = async () => api.get('/cryptocurrency/listings/latest');

export const getCoinById = async (id: number) => api.get(`/cryptocurrency/quotes/latest?id=${id}`);
