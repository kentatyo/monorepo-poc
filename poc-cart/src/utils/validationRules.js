/**
 * 値が空でないかをチェックする関数
 * @param {*} value - チェックする値
 * @returns {boolean|string} 値が存在する場合はtrue、そうでない場合はエラーメッセージ
 */
export const required = (value) => !!value || '必須項目です';

/**
 * 最小文字数をチェックする関数を生成する
 * @param {number} min - 最小文字数
 * @returns {function(*): (boolean|string)} 生成されたバリデーション関数
 */
export const minLength = (min) => (value) =>
  !value || value.length >= min || `${min}文字以上で入力してください`;

/**
 * 最大文字数をチェックする関数を生成する
 * @param {number} max - 最大文字数
 * @returns {function(*): (boolean|string)} 生成されたバリデーション関数
 */
export const maxLength = (max) => (value) =>
  !value || value.length <= max || `${max}文字以下で入力してください`;

/**
 * 日本の携帯電話番号の形式をチェックする関数
 * @param {string} value - チェックする電話番号
 * @returns {boolean|string} 電話番号が有効な場合はtrue、そうでない場合はエラーメッセージ
 */
export const validatePhoneNumber = (value) => {
  // 携帯電話番号のパターン: 070, 080, 090で始まる11桁の数字
  const pattern = /^(070|080|090)\d{8}$/;
  return (
    !value ||
    pattern.test(value) ||
    '有効な携帯電話番号を入力してください（例: 09012345678）'
  );
};
