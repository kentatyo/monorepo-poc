# common

各アプリから共通で利用される共通ファイル群

## ディレクトリ構成

```bash

├─components                # 共通で利用されるコンポーネント
├─styles                    # 共通で利用されるスタイル
├─types                     # 共通で利用される型定義
└─utils                     # 共通で利用される汎用処理

```

## 利用時

各アプリから本ディレクトリ配下のファイルを読み込む際は以下のように@common エイリアスを利用してください。

```js
import { required, validatePhoneNumber } from "@common/utils/validationRules";
```

これは各アプリの vite.config.js にて以下のように@common エイリアスを定義しているためです。
これによりディレクトリ構造を意識することなく各ファイルモジュールを読み込むことができます。

```js
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@common': fileURLToPath(new URL('../common', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
```
