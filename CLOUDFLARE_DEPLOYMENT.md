# Cloudflare Pages デプロイメントガイド

このドキュメントでは、BoltSiteをCloudflare Pagesにデプロイする手順を説明します。

## 🚀 クイックスタート

### 1. ローカルでテスト

```bash
# Cloudflare用にビルド
npm run build:cloudflare

# Cloudflare用プレビュー
npm run preview:cloudflare
```

### 2. Cloudflare Pages でのデプロイ

#### 方法A: GitHubから直接デプロイ（推奨）

1. **Cloudflare Dashboardにアクセス**
   - [Cloudflare Dashboard](https://dash.cloudflare.com) にログイン
   - 「Pages」を選択

2. **新しいプロジェクトを作成**
   - 「Create a project」をクリック
   - 「Connect to Git」を選択
   - GitHubリポジトリを接続

3. **ビルド設定**

   ```
   Framework preset: Astro
   Build command: npm run build:cloudflare
   Build output directory: dist
   Root directory: /
   ```

4. **環境変数（必要に応じて）**
   ```
   NODE_VERSION: 20
   ENVIRONMENT: production
   ```

#### 方法B: Wrangler CLI を使用

1. **Wrangler CLIをインストール**

   ```bash
   npm install -g wrangler
   ```

2. **Cloudflareにログイン**

   ```bash
   wrangler login
   ```

3. **プロジェクトの初期化**

   ```bash
   wrangler pages project create boltsite-by-cor-inc
   ```

4. **デプロイ**
   ```bash
   npm run build:cloudflare
   wrangler pages deploy dist
   ```

## 📁 設定ファイル

### astro.config.cloudflare.mjs

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://boltsite-by-cor-inc.pages.dev",
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en", "zh", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

### wrangler.toml

```toml
[build]
command = "npm run build:cloudflare"

[env.production]
vars = { ENVIRONMENT = "production" }

[env.preview]
vars = { ENVIRONMENT = "preview" }
```

## 🔧 利用可能なスクリプト

```bash
# Cloudflare用ビルド
npm run build:cloudflare

# Cloudflare用プレビュー
npm run preview:cloudflare

# 通常のビルド（Vercel用）
npm run build

# 通常のプレビュー
npm run preview
```

## 🌍 カスタムドメインの設定

1. **Cloudflare Dashboard**で「Pages」→ あなたのプロジェクト → 「Custom domains」
2. 「Set up a custom domain」をクリック
3. ドメイン名を入力（例：boltsite.example.com）
4. DNS設定を確認・更新

## ⚡ パフォーマンス最適化

Cloudflare Pagesでは以下の最適化が自動で適用されます：

- **自動CDN配信**: 世界中のエッジロケーションから配信
- **Auto Minify**: HTML、CSS、JavaScriptの自動最小化
- **Brotli圧縮**: 高効率圧縮での配信
- **HTTP/3対応**: 最新プロトコルでの高速通信

## 🛠️ トラブルシューティング

### ビルドエラーが発生した場合

1. **Node.jsバージョンを確認**

   ```bash
   node --version  # v20.x.x以上を推奨
   ```

2. **依存関係を再インストール**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **ローカルでビルドテスト**
   ```bash
   npm run build:cloudflare
   ```

### SSR機能が動作しない場合

- `astro.config.cloudflare.mjs`で`output: "server"`が設定されているか確認
- Cloudflare Pagesの「Functions」が有効になっているか確認

## 📊 デプロイ後の確認項目

- [ ] サイトが正常に表示される
- [ ] 多言語対応が動作する
- [ ] フォームの送信が動作する
- [ ] ページ遷移が正常に動作する
- [ ] モバイル表示が正常
- [ ] PageSpeed Insightsスコアが95+

## 🔗 参考リンク

- [Cloudflare Pages ドキュメント](https://developers.cloudflare.com/pages/)
- [Astro Cloudflare アダプター](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Wrangler CLI ドキュメント](https://developers.cloudflare.com/workers/wrangler/)

---

**注意**: デプロイ後は https://boltsite-by-cor-inc.pages.dev でアクセスできます（ドメイン名は実際のプロジェクト名に応じて変更されます）。
