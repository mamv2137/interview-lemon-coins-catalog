export const getVariationColor = (percentage: number): 'green' | 'red' => {
  return percentage < 0 ? 'red' : 'green';
}

export const formatTwoDecimals = (number: number) => number?.toFixed(2);

export const formatToLocalPrice = (number: number) => number.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
