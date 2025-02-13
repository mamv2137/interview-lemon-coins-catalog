import { Coin } from '../../types';

export interface CoinsListProps {
  coins: Coin[],
  isLoading?: boolean
  onRefresh?: () => void
}
