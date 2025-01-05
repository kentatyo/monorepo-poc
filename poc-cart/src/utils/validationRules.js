export const required = (value) => !!value || '必須項目です';

export const minLength = (min) => (value) =>
  !value || value.length >= min || `${min}文字以上で入力してください`;

export const maxLength = (max) => (value) =>
  !value || value.length <= max || `${max}文字以下で入力してください`;

export const validatePhoneNumber = (value) => {
  // 携帯電話番号のパターン: 070, 080, 090で始まる11桁の数字
  const pattern = /^(070|080|090)\d{8}$/;
  return (
    !value ||
    pattern.test(value) ||
    '有効な携帯電話番号を入力してください（例: 09012345678）'
  );
};
