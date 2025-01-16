# poc-cart

## ディレクトリ構成
```bash
│  .gitignore                           # プロジェクト全体の.gitignore
│  package.json                         # ルートpackage.json（workspacesの設定を含む）
│  README.md                            # プロジェクト全体の説明
│
└─poc-cart
    │  .editorconfig
    │  .eslintrc-auto-import.json
    │  .gitignore
    │  .prettierrc.json
    │  auto-imports.d.ts
    │  components.d.ts
    │  eslint.config.js
    │  index.html
    │  jsconfig.json
    │  package.json
    │  README.md
    │  typed-router.d.ts
    │  vite.config.js
    │  vitest.config.js
    │
    ├─.storybook
    │      main.js
    │      preview.js
    │
    ├─.vscode
    │      extensions.json
    │
    ├─config
    │      .env
    │
    ├─doc
    │      architechture.drawio
    │      open-api.yaml
    │
    ├─public
    │      favicon.ico
    │
    └─src
        │  App.vue
        │  main.js
        │
        ├─components
        │      PageTitle.vue                # 複数画面で呼ばれるコンポーネントファイル
        │
        ├─plugins
        │      vuetify.js
        │
        ├─router
        │      index.js
        │
        ├─stores
        │      index.js
        │      useCartStore.js
        │      useUserStore.js
        │
        ├─stories
        │      Configure.mdx
        │      PageTitle.stories.js
        │
        ├─styles                            # アプリケーション全体で適用されるスタイルを
        │      global.css
        │
        ├─types                             # アプリケーション内で利用する型を定義
        │      documentCart.js
        │
        ├─utils                             # 複数コンポーネントから利用されるjs処理
        │      validationRules.js           ## 各処理の性質に応じて適切にファイルを作成 
        │      validationRules.test.js      ## 処理とテストコードのファイルは1:1で作成
        │
        └─views                             # 各画面のメインコンポーネントファイル
            ├─CartConfirm                   ## 各画面ごとにディレクトリを作成
            │      index.vue                ## 各画面
            │
            ├─CartSelect
            │      index.vue
            │
            └─CartSubmit
                    index.vue

```

## 準備

利用するライブラリのインストール

```sh
npm install
```

### ローカル開発環境

アプリケーションの立ち上げ

```sh
cd ./poc-cart
npm run dev
```

モックサーバの立ち上げ

```sh
cd ./poc-cart
prism mock ./doc/open-api.yaml
```

### サーバ環境

アプリケーションのビルド

```sh
npm run build
```

### テストコード

テストコードの実行

```sh
npm run test:unit
```
