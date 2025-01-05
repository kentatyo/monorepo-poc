import { required } from './validationRules';
describe('required validation rule', () => {
  it('should return true for non-empty string', () => {
    expect(required('test')).toBe(true);
  });

  it('should return true for non-zero number', () => {
    expect(required(42)).toBe(true);
  });

  it('should return true for true boolean', () => {
    expect(required(true)).toBe(true);
  });

  it('should return error message for empty string', () => {
    expect(required('')).toBe('必須項目です');
  });

  it('should return error message for null', () => {
    expect(required(null)).toBe('必須項目です');
  });

  it('should return error message for undefined', () => {
    expect(required(undefined)).toBe('必須項目です');
  });

  it('should return error message for false', () => {
    expect(required(false)).toBe('必須項目です');
  });

  it('should return error message for 0', () => {
    expect(required(0)).toBe('必須項目です');
  });
});
