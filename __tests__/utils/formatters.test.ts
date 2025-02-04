import { formatTwoDecimals, formatToLocalPrice } from '../../src/presentation/utils/formaters';

describe('formatTwoDecimals', () => {
  it('formats number to two decimal places', () => {
    expect(formatTwoDecimals(123.456)).toBe('123.46');
    expect(formatTwoDecimals(123)).toBe('123.00');
    expect(formatTwoDecimals(0)).toBe('0.00');
  });

  it('handles undefined input gracefully', () => {
    expect(formatTwoDecimals(undefined)).toBeUndefined();
  });
});

describe('formatToLocalPrice', () => {
  it('formats number to local price string', () => {
    expect(formatToLocalPrice(1234.56)).toBe('$1,234.56');
    expect(formatToLocalPrice(0)).toBe('$0.00');
  });

  it('handles large numbers correctly', () => {
    expect(formatToLocalPrice(1234567890.12)).toBe('$1,234,567,890.12');
  });
});