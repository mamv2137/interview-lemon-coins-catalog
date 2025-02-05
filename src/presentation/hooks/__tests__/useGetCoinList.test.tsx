import React from 'react';
import { renderHook, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { getCoinById } from '../../../services/CMC';
import useGetCoinById from '../useGetCoinById';
import useGetCoinsList from '../useGetCoinsList';

jest.mock('../../../services/CMC');

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={ queryClient }> { children } </QueryClientProvider>
);

describe('useGetCoinList', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
    queryClient.clear();
  });

  it('fetches coins data successfully', async () => {
    const mockData = { data: { 1: { id: 1, name: 'Bitcoin' } } };
    (getCoinById as jest.Mock).mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useGetCoinsList(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it('handles error when fetching coin data', async () => {
    (getCoinById as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    const { result } = renderHook(() => useGetCoinById(1), { wrapper });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toEqual(new Error('Network Error'));
  });
});
