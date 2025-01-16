import {
  required,
  minLength,
  maxLength,
  validatePhoneNumber,
} from './validationRules';

describe('required バリデーションルール', () => {
  it('空でない文字列の場合、trueを返すこと', () => {
    expect(required('test')).toBe(true);
  });

  it('0以外の数値の場合、trueを返すこと', () => {
    expect(required(42)).toBe(true);
  });

  it('真偽値trueの場合、trueを返すこと', () => {
    expect(required(true)).toBe(true);
  });

  it('空文字列の場合、エラーメッセージを返すこと', () => {
    expect(required('')).toBe('必須項目です');
  });

  it('nullの場合、エラーメッセージを返すこと', () => {
    expect(required(null)).toBe('必須項目です');
  });

  it('undefinedの場合、エラーメッセージを返すこと', () => {
    expect(required(undefined)).toBe('必須項目です');
  });

  it('真偽値falseの場合、エラーメッセージを返すこと', () => {
    expect(required(false)).toBe('必須項目です');
  });

  it('数値0の場合、エラーメッセージを返すこと', () => {
    expect(required(0)).toBe('必須項目です');
  });
});

describe('minLength バリデーションルール', () => {
  const minLength5 = minLength(5);

  it('最小文字数以上の場合、trueを返すこと', () => {
    expect(minLength5('12345')).toBe(true);
    expect(minLength5('123456')).toBe(true);
  });

  it('最小文字数未満の場合、エラーメッセージを返すこと', () => {
    expect(minLength5('1234')).toBe('5文字以上で入力してください');
  });

  it('空文字列の場合、trueを返すこと', () => {
    expect(minLength5('')).toBe(true);
  });

  it('nullまたはundefinedの場合、trueを返すこと', () => {
    expect(minLength5(null)).toBe(true);
    expect(minLength5(undefined)).toBe(true);
  });
});

describe('maxLength バリデーションルール', () => {
  const maxLength10 = maxLength(10);

  it('最大文字数以下の場合、trueを返すこと', () => {
    expect(maxLength10('1234567890')).toBe(true);
    expect(maxLength10('123')).toBe(true);
  });

  it('最大文字数を超える場合、エラーメッセージを返すこと', () => {
    expect(maxLength10('12345678901')).toBe('10文字以下で入力してください');
  });

  it('空文字列の場合、trueを返すこと', () => {
    expect(maxLength10('')).toBe(true);
  });

  it('nullまたはundefinedの場合、trueを返すこと', () => {
    expect(maxLength10(null)).toBe(true);
    expect(maxLength10(undefined)).toBe(true);
  });
});

describe('validatePhoneNumber バリデーションルール', () => {
  it('有効な携帯電話番号の場合、trueを返すこと', () => {
    expect(validatePhoneNumber('09012345678')).toBe(true);
    expect(validatePhoneNumber('08087654321')).toBe(true);
    expect(validatePhoneNumber('07098765432')).toBe(true);
  });

  it('無効な携帯電話番号の場合、エラーメッセージを返すこと', () => {
    expect(validatePhoneNumber('0901234567')).toBe(
      '有効な携帯電話番号を入力してください（例: 09012345678）',
    );
    expect(validatePhoneNumber('0912345678')).toBe(
      '有効な携帯電話番号を入力してください（例: 09012345678）',
    );
    expect(validatePhoneNumber('09012345678９')).toBe(
      '有効な携帯電話番号を入力してください（例: 09012345678）',
    );
  });

  it('空文字列の場合、trueを返すこと', () => {
    expect(validatePhoneNumber('')).toBe(true);
  });

  it('nullまたはundefinedの場合、trueを返すこと', () => {
    expect(validatePhoneNumber(null)).toBe(true);
    expect(validatePhoneNumber(undefined)).toBe(true);
  });
});
