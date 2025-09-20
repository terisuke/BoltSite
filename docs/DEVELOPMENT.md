# 開発ガイド

## 開発環境のセットアップ

### 前提条件

- Node.js 18.0.0以上
- npm 9.0.0以上
- Git

### セットアップ手順

1. **リポジトリのクローン**

   ```bash
   git clone https://github.com/your-username/BoltSite.git
   cd BoltSite
   ```

2. **依存関係のインストール**

   ```bash
   npm install
   ```

3. **環境変数の設定**

   ```bash
   cp .env.example .env.local
   # .env.localファイルを編集
   ```

4. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

## プロジェクト構造の詳細

### コンポーネント設計原則

1. **単一責任の原則**: 各コンポーネントは一つの責任を持つ
2. **再利用性**: 汎用的なコンポーネントは`ui/`ディレクトリに配置
3. **型安全性**: TypeScriptの型定義を活用
4. **アクセシビリティ**: WCAG 2.1 AA準拠

### ファイル命名規則

- **コンポーネント**: PascalCase (例: `Button.astro`)
- **ユーティリティ**: camelCase (例: `performance.ts`)
- **データファイル**: camelCase (例: `siteData.json`)
- **型定義**: camelCase (例: `index.ts`)

### コンポーネントの作成

新しいコンポーネントを作成する際は、以下のテンプレートを使用してください：

```astro
---
// 型定義のインポート
import type { ComponentProps } from '../../types';

// Propsの型定義
interface Props extends ComponentProps {
  // コンポーネント固有のProps
}

// Propsの分割代入
const {
  className = '',
  id,
  ...rest
} = Astro.props;
---

<!-- コンポーネントのマークアップ -->
<div class={className} id={id} {...rest}>
  <!-- コンテンツ -->
</div>

<style>
  /* コンポーネント固有のスタイル */
</style>
```

## スタイリングガイドライン

### Tailwind CSSの使用

1. **ユーティリティクラスを優先**: カスタムCSSは最小限に
2. **レスポンシブデザイン**: Mobile Firstアプローチ
3. **一貫性**: デザインシステムのカラーパレットを使用

### カスタムCSS

カスタムCSSが必要な場合は、`global.css`の`@layer components`内に定義：

```css
@layer components {
  .custom-component {
    @apply base-classes;
  }
}
```

## データ管理

### JSONファイルの構造

データファイルは型安全性を保つため、TypeScriptの型定義と一致させる必要があります：

```typescript
// types/index.ts
export interface PricingPlan {
  title: string;
  description: string;
  price: number;
  // ...
}
```

```json
// data/priceData.json
[
  {
    "title": "ビギナー",
    "description": "個人事業主や小規模事業者に最適なプラン",
    "price": 15000
  }
]
```

## パフォーマンス最適化

### 画像最適化

- `OptimizedImage`コンポーネントを使用
- 適切なサイズとフォーマットを選択
- Lazy loadingを実装

### バンドルサイズの最適化

- 不要な依存関係の削除
- Tree shakingの活用
- 動的インポートの使用

### Core Web Vitals

- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

## SEO最適化

### メタタグ

各ページで適切なメタタグを設定：

```astro
---
import { generateMetaTags } from '../utils/seo';

const seoData = {
  title: 'ページタイトル',
  description: 'ページの説明',
  keywords: ['キーワード1', 'キーワード2'],
  image: {
    url: '/images/og-image.jpg',
    alt: '画像の説明'
  }
};
---

<MainHead {...seoData} />
```

### 構造化データ

適切な構造化データを実装：

```astro
<script type="application/ld+json" set:html={generateStructuredData(seoData)} />
```

## テスト

### テストの実行

```bash
# 型チェック
npm run astro check

# ビルドテスト
npm run build
```

### テストカバレッジ

- 重要な機能は100%カバレッジを目指す
- ユニットテストとE2Eテストを実装

## デプロイメント

### Vercelへのデプロイ

1. **Vercelアカウントの作成**
2. **プロジェクトの接続**
3. **環境変数の設定**
4. **自動デプロイの設定**

### 本番環境の確認

- [ ] Lighthouseスコアの確認
- [ ] Core Web Vitalsの確認
- [ ] SEOスコアの確認
- [ ] アクセシビリティの確認

## トラブルシューティング

### よくある問題

1. **Tailwindクラスが適用されない**
   - `tailwind.config.mjs`の設定を確認
   - クラス名のスペルを確認

2. **型エラーが発生する**
   - `types/index.ts`の型定義を確認
   - Propsの型を確認

3. **ビルドエラーが発生する**
   - 依存関係のバージョンを確認
   - Node.jsのバージョンを確認

### デバッグツール

- **Astro Dev Tools**: ブラウザの開発者ツール
- **Lighthouse**: パフォーマンスとSEOの分析
- **WAVE**: アクセシビリティのチェック

## コーディング規約

### TypeScript

- 型注釈を明示的に記述
- `any`型の使用を避ける
- インターフェースを活用

### Astro

- コンポーネントは関数型で記述
- Propsの型安全性を保つ
- 適切なセマンティックHTMLを使用

### CSS

- Tailwindのユーティリティクラスを優先
- カスタムCSSは最小限に
- レスポンシブデザインを考慮

## リリースプロセス

1. **機能ブランチの作成**
2. **開発とテスト**
3. **プルリクエストの作成**
4. **コードレビュー**
5. **マージとデプロイ**

## 貢献ガイドライン

1. **Issueの作成**: バグ報告や機能要求
2. **ブランチの作成**: `feature/`または`fix/`プレフィックス
3. **コミットメッセージ**: 明確で簡潔に
4. **プルリクエスト**: 詳細な説明を記述

---

このドキュメントは継続的に更新されます。質問や提案がある場合は、Issueを作成してください。
