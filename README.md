# monorepo-poc

本アプリケーションは Vue で構成される複数の SPA アプリをモノレポ構成で構築している。
それぞれのアプリに関する説明は各 README.md を参照。

## ディレクトリ構成

```bash
│ .gitignore                # プロジェクト全体の.gitignore
│ package.json              # ルートpackage.json（workspacesの設定を含む）
│ README.md                 # プロジェクト全体の説明
│
└─packages
    ├─common                # 各アプリから共通で利用される共通ファイル群
    └─shiryo                # 資料請求アプリに関するファイル群

```

## 準備

利用するライブラリのインストール

```sh
npm install
```
