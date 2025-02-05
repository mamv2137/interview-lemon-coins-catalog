import { renderHook } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupServer } from 'msw/native';
import { http } from 'msw';
import useGetCoinById from '../../src/presentation/hooks/useGetCoinById';

const server = setupServer(
  http.get('/cryptocurrency/quotes/latest', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          1: { id: 1, name: 'Bitcoin' },
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useGetCoinById', () => {
  afterEach(() => {
    queryClient.clear();
  });

  it('fetches coin data successfully', async () => {
    const { result, waitFor } = renderHook(() => useGetCoinById(1), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual({ data: { 1: { id: 1, name: 'Bitcoin' } } });
  });

  it('handles error when fetching coin data', async () => {
    server.use(
      http.get('/cryptocurrency/quotes/latest', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result, waitFor } = renderHook(() => useGetCoinById(1), { wrapper });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toEqual(new Error('Request failed with status code 500'));
  });
});