export const getVariationColor = (percentage: number): 'green' | 'red' => percentage < 0 ? 'red' : 'green';
