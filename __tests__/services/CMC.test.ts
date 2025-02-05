import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getCoinsList, getCoinById } from '../../src/services/CMC';

const mock = new MockAdapter(axios);

describe('CMC Service', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches the coins list successfully', async () => {
    mock.onGet('/cryptocurrency/listings/latest').reply(200);

    const response = await getCoinsList();

    // console.log('asdasd', response?.data);
    expect(response.status).toBe(200);
    expect(response.data.data?.[0].name).toBe('Bitcoin');
  });

  it('fetches a coin by id successfully', async () => {
    mock.onGet('/cryptocurrency/quotes/latest?id=1').reply(200);

    const response = await getCoinById(1);
    expect(response.data?.data['1'].name).toBe('Bitcoin');
  });
});