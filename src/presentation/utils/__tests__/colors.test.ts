
import { getVariationColor } from '../colors';

describe('getVariationColor', () => {
  it('returns "green" for positive percentages', () => {
    expect(getVariationColor(10)).toBe('green');
    expect(getVariationColor(0.1)).toBe('green');
  });

  it('returns "red" for negative percentages', () => {
    expect(getVariationColor(-10)).toBe('red');
    expect(getVariationColor(-0.1)).toBe('red');
  });

  it('returns "green" for zero percentage', () => {
    expect(getVariationColor(0)).toBe('green');
  });
});
