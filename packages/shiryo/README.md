# shiryo

資料請求に関するSPA。

## ディレクトリ構成

```bash
│  .editorconfig                      # コーディング規約の設定
│  .eslintrc-auto-import.json         # ESLintの自動インポート設定
│  .gitignore                         # Gitの無視ファイル設定
│  .prettierrc.json                   # Prettierのコード整形設定
│  auto-imports.d.ts                  # 自動インポートの型定義
│  components.d.ts                    # コンポーネントの型定義
│  eslint.config.js                   # ESLintの設定
│  index.html                         # アプリケーションのエントリーポイントHTML
│  jsconfig.json                      # JavaScriptプロジェクトの設定
│  package.json                       # プロジェクトの依存関係と設定
│  README.md                          # プロジェクトの説明文書
│  typed-router.d.ts                  # タイプ付きルーターの定義
│  vite.config.js                     # Viteのビルド設定
│  vitest.config.js                   # Vitestのテスト設定
│
├─.storybook                          # Storybookの設定ディレクトリ
│
├─config                              # プロジェクト設定ファイル用ディレクトリ
│      .env                           # 環境変数の設定ファイル
│
├─doc                                 # プロジェクトドキュメント用ディレクトリ
│
├─public                              # 静的アセット用ディレクトリ
│
└─src                                 # ソースコードのルートディレクトリ
    │  App.vue                        # アプリケーションのルートコンポーネント
    │  main.js                        # アプリケーションのエントリーポイント
    │
    ├─components                      # 再利用可能なVueコンポーネント用ディレクトリ
    │
    ├─plugins                         # プラグイン設定用ディレクトリ（例：Vuetify）
    │
    ├─router                          # Vue Router設定用ディレクトリ
    │
    ├─stores                          # 状態管理（Pinia/Vuex）用ディレクトリ
    │
    ├─stories                         # Storybookのストーリーファイル用ディレクトリ
    │
    ├─styles                          # グローバルスタイル用ディレクトリ
    │                                 # アプリケーション全体で適用されるスタイルを格納
    │
    ├─types                           # カスタム型定義用ディレクトリ
    │                                 # アプリケーション内で利用する型を定義
    │
    ├─utils                           # ユーティリティ関数用ディレクトリ
    │                                 # 複数コンポーネントから利用されるJS処理を格納
    │
    └─views                           # 画面コンポーネント用ディレクトリ
        │                             # 各画面のメインコンポーネントファイルを格納
        │
        ├─CartConfirm                 # 各画面ごとにディレクトリを作成
        │      index.vue              # 各画面のメインコンポーネント
```

### ローカル開発環境

アプリケーションの立ち上げ

```sh
npm run dev
```

モックサーバの立ち上げ

```sh
prism mock ./doc/open-api.yaml
```

アプリケーションのルートをブラウザで表示（ポートは例）
http://localhost:5173/select

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

※vitest.config.jsの設定により、commonパッケージ配下のテストコードも実行されるようになっています。
