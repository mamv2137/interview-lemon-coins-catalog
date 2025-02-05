import { getCoinsList, getCoinById } from '../../src/services/CMC';
import { getCoinByIdErrorHandler, getCoinByIdHandler, getCoinListErrorHandler, getCoinListHandler } from '../../src/jest/helpers/http-handlers';
import { setupMockServer } from '../../src/jest/helpers/mock-server';

const handlers = [getCoinListHandler(), getCoinByIdHandler()];

setupMockServer(handlers);

describe('CMC Service', () => {
  it('fetches the coins list successfully', async () => {
    const response = await getCoinsList();

    console.log(response.data);

    expect(response.status).toBe(200);
    expect(response.data.data?.[0].name).toBe('Bitcoin');
  });

  it('fetches a coin by id successfully', async () => {
    const response = await getCoinById(1);

    expect(response.status).toBe(200);
    expect(response.data.data?.[1].name).toBe('Bitcoin');
  });

  it('handles error when fetching coins list', async () => {
    setupMockServer([getCoinListErrorHandler()]);

    const response = await getCoinsList();

    expect(response.status).toBe(500);
  });

  it('handles error when fetching a coin by id', async () => {
    setupMockServer([getCoinByIdErrorHandler()]);

    await expect(getCoinById(1)).rejects.toThrow('Request failed with status code 500');
  });
});