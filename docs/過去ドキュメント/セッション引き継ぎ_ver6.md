# セッション引き継ぎ ver6

## 最終更新日時
2026-01-26

---

## 1. 現在の作業内容

### 完了した作業
YDシステムの自社製アナリティクス（YD Analytics）を新規作成。SEO対策として sitemap.ts、robots.ts、動的OGP画像生成、JSON-LD構造化データを homepage に追加。

### 進捗状況
- YD Analytics 開発: 100%完了
- SEO対策実装: 100%完了
- トラッキングスクリプト連携: 100%完了（デプロイ待ち）
- Neon データベース設定: 未実施（デプロイ後に必要）

---

## 2. 完了したタスク

### YD Analytics 作成（2026-01-26）

自社製アナリティクスダッシュボードを新規開発。GA4より使いやすいシンプルなダッシュボードを目指した。

#### プロジェクト構成
```
/Users/upa/systemDev/ydSystem/analytics/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── track/route.ts    # トラッキングAPI
│   │   │   └── stats/route.ts    # 統計API
│   │   ├── page.tsx              # ダッシュボード
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── lib/
│       ├── db.ts                 # Neon接続
│       ├── schema.sql            # DBスキーマ
│       └── utils.ts              # ユーティリティ
├── public/
│   └── tracker.js                # クライアント側トラッキングスクリプト
├── package.json
└── .env.example
```

#### 技術スタック
- Next.js 16.1.4
- Neon (PostgreSQL Serverless)
- Recharts（グラフ描画）
- Vercel（ホスティング予定）

#### 計測項目
| 項目 | 説明 |
|------|------|
| ページビュー | 各ページの閲覧数 |
| ユニーク訪問者 | セッションベースのユニーク数 |
| 流入元（リファラー） | どこから来たか |
| デバイス | PC/モバイル/タブレット |
| ブラウザ | Chrome/Firefox/Safari等 |
| 国・地域 | Vercelヘッダーから取得 |
| スクロール深度 | どこまでスクロールしたか |
| 滞在時間 | ページ滞在秒数 |
| クリック | リンク・ボタンクリック |

#### ダッシュボード機能
- 期間選択（7日/14日/30日/90日）
- サイト選択（複数サイト対応可能）
- 日別アクセス推移（折れ線グラフ）
- 人気ページランキング
- 流入元ランキング
- デバイス分布（円グラフ）
- ブラウザ分布（棒グラフ）
- 国・地域別アクセス

### SEO対策実装（2026-01-26）

#### sitemap.ts
自動生成される sitemap.xml
- 静的ページ（/, /business, /company, /contact, /blog）
- 全26記事のブログページ

#### robots.ts
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://www.yd-system.com/sitemap.xml
```

#### 動的OGP画像生成
`/api/og` エンドポイントで動的OGP画像を生成
- タイトルとカテゴリをクエリパラメータで受け取り
- サイトデザインに合わせたダークテーマ
- ブログ記事ページで自動使用

#### JSON-LD構造化データ
| ページ | スキーマ |
|--------|---------|
| 全ページ（layout.tsx） | Organization, WebSite |
| ブログ記事 | Article |

### トラッキング連携（2026-01-26）

homepage の layout.tsx にトラッキングスクリプトを追加。
環境変数 `NEXT_PUBLIC_ANALYTICS_URL` でアナリティクスのURLを設定。

---

## 3. 次にやるべきこと

### 優先度高
1. **Neon データベース作成**: Neon Dashboard で新規プロジェクト作成
2. **スキーマ実行**: `src/lib/schema.sql` を Neon SQL Editor で実行
3. **Analytics デプロイ**: Vercel に analytics プロジェクトをデプロイ
4. **環境変数設定**:
   - Analytics: `DATABASE_URL` を Vercel に設定
   - Homepage: `NEXT_PUBLIC_ANALYTICS_URL` を設定

### 優先度中
1. **Homepage 再デプロイ**: アナリティクス連携を有効化
2. **動作確認**: トラッキングが正常に記録されるか確認

### 優先度低
1. 導入事例・実績の追加（実績ができたら）
2. より具体的なサービス説明

---

## 4. 未解決の問題

| 項目 | 状態 | 詳細 |
|------|------|------|
| metadataBase警告 | 軽微 | ビルド時に警告が出るが動作に影響なし |
| Neon未設定 | 要対応 | デプロイ前にDB作成が必要 |

---

## 5. 重要なコンテキスト

### プロジェクト構成（更新）
```
/Users/upa/systemDev/ydSystem/
├── homepage/     # コーポレートサイト本体
└── analytics/    # 自社製アナリティクス（新規）
```

### アナリティクス設計思想
- **GA4より使いやすく**: シンプルなダッシュボード
- **複数サイト対応**: site_id で管理
- **プライバシー配慮**: Cookie不使用、sessionStorageのみ
- **自社管理**: データは自社DBに保存

### デプロイ手順（Analytics）
1. Neon で PostgreSQL プロジェクト作成
2. `schema.sql` を実行
3. Vercel で新規プロジェクト作成
4. `DATABASE_URL` 環境変数設定
5. デプロイ

### Homepage 環境変数（追加）
```
NEXT_PUBLIC_ANALYTICS_URL=https://your-analytics.vercel.app
```

---

## 6. 関連ファイル

### Analytics プロジェクト
| ファイルパス | 説明 |
|-------------|------|
| `analytics/src/app/page.tsx` | ダッシュボードUI |
| `analytics/src/app/api/track/route.ts` | トラッキングAPI |
| `analytics/src/app/api/stats/route.ts` | 統計取得API |
| `analytics/src/lib/db.ts` | DB接続 |
| `analytics/src/lib/schema.sql` | DBスキーマ |
| `analytics/public/tracker.js` | クライアントスクリプト |

### Homepage SEO追加
| ファイルパス | 説明 |
|-------------|------|
| `homepage/src/app/sitemap.ts` | サイトマップ自動生成 |
| `homepage/src/app/robots.ts` | robots.txt |
| `homepage/src/app/api/og/route.tsx` | 動的OGP画像 |
| `homepage/src/app/blog/[slug]/page.tsx` | JSON-LD追加 |
| `homepage/src/app/layout.tsx` | 組織・サイトJSON-LD + トラッカー |

---

## 7. デプロイ情報

### Homepage
| 項目 | 値 |
|------|-----|
| **本番URL** | https://www.yd-system.com |
| Vercelプロジェクト | naotos-projects-6818d7a3/homepage |

### Analytics（新規）
| 項目 | 値 |
|------|-----|
| **本番URL** | 未定（デプロイ後に決定） |
| データベース | Neon PostgreSQL（要作成） |

---

## 8. DBスキーマ概要

```sql
-- サイト管理
CREATE TABLE sites (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT NOT NULL
);

-- セッション
CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  page_views INTEGER DEFAULT 1,
  ...
);

-- イベント
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  site_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,  -- pageview, scroll, click, leave
  url TEXT NOT NULL,
  ...
);
```

---

## 9. tracker.js 使い方

Homepage以外のサイトでもトラッキングを使う場合：

```html
<script
  src="https://[analytics-url]/tracker.js"
  data-site-id="site-name"
  defer
></script>
```

新しいサイトを追加する場合は、Neon の sites テーブルにサイトを登録。
