import { http, HttpResponse } from "msw";

export const getCoinListHandler = () => http.get('/cryptocurrency/listings/latest', () => {
  return HttpResponse.json({ data: [{ id: 1, name: 'Bitcoin' }] }, {
    status: 200,
  });
});

export const getCoinByIdHandler = () => http.get('/cryptocurrency/quotes/latest', (req) => {
  const id = req?.url?.searchParams.get('id');
  return HttpResponse.json({ data: { [id]: { id: Number(id), name: 'Bitcoin' } } }, {
    status: 200,
  });
});

export const getCoinListErrorHandler = () => http.get('/cryptocurrency/listings/latest', () => {
  return HttpResponse.json(null, {
    status: 500,
  });
});

export const getCoinByIdErrorHandler = () => http.get('/cryptocurrency/quotes/latest', (req) => {
  return HttpResponse.json(null, {
    status: 500,
  });
});
