# セッション引き継ぎ ver7

## 最終更新日時
2026-01-26

---

## 1. 現在の作業内容

### 完了した作業
YD Analytics のデプロイ完了。Neon PostgreSQL との接続問題を解決し、トラッキングが正常に動作することを確認。

### 進捗状況
- YD Analytics 開発: 100%完了
- Neon データベース設定: 100%完了
- Vercel デプロイ: 100%完了
- データベース接続問題: 解決済み
- SEO対策実装: 100%完了
- トラッキングスクリプト連携: 100%完了

---

## 2. 完了したタスク

### YD Analytics デプロイ完了（2026-01-26）

#### デプロイ情報
| 項目 | 値 |
|------|-----|
| **本番URL** | https://analytics-six.vercel.app |
| Vercelプロジェクト | naotos-projects-6818d7a3/analytics |
| データベース | Neon PostgreSQL (yd-analytics) |
| Neonプロジェクト | royal-bar-97768223 |
| ブランチ | production (br-ancient-cell-a1pe24fs) |
| エンドポイント | ep-cool-hill-a1o0g33c-pooler.ap-southeast-1.aws.neon.tech |

#### API エンドポイント
| エンドポイント | メソッド | 説明 |
|---------------|---------|------|
| `/api/track` | POST | イベントトラッキング |
| `/api/stats` | GET | 統計データ取得 |

#### 動作確認済み
```bash
# Stats API
curl https://analytics-six.vercel.app/api/stats
# → JSON形式で統計データを返す

# Track API
curl -X POST https://analytics-six.vercel.app/api/track \
  -H "Content-Type: application/json" \
  -d '{"siteId":"yd-system","sessionId":"xxx","eventType":"pageview","url":"https://..."}'
# → {"success":true}
```

### 解決した問題: パスワード認証エラー（2026-01-26）

#### 問題
```
NeonDbError: password authentication failed for user 'neondb_owner'
```

#### 原因
Neonデータベースのパスワードが正しく設定されていなかった

#### 解決手順
1. Neonコンソール → Dashboard → Connect → Reset password
2. 新しいパスワードを取得
3. Vercel環境変数を全環境で更新:
   ```bash
   vercel env rm DATABASE_URL production
   vercel env rm DATABASE_URL preview
   vercel env rm DATABASE_URL development
   echo "postgresql://..." | vercel env add DATABASE_URL production
   echo "postgresql://..." | vercel env add DATABASE_URL preview
   echo "postgresql://..." | vercel env add DATABASE_URL development
   ```
4. キャッシュクリア付きで再デプロイ:
   ```bash
   vercel --prod --yes --force
   ```

#### 教訓
- Vercel環境変数は全環境（production, preview, development）に設定が必要
- `--force` オプションでキャッシュをクリアして再ビルド
- Neonパスワードは定期的にリセット可能

---

## 3. 次にやるべきこと

### 優先度高
1. **Homepage 再デプロイ**: アナリティクス連携を有効化
   - `NEXT_PUBLIC_ANALYTICS_URL=https://analytics-six.vercel.app` を設定
2. **動作確認**: www.yd-system.com からのトラッキングが記録されるか確認

### 優先度中
1. **ダッシュボード確認**: https://analytics-six.vercel.app でデータ閲覧
2. **サイト登録**: Neon の sites テーブルに yd-system を登録

### 優先度低
1. 導入事例・実績の追加（実績ができたら）
2. より具体的なサービス説明

---

## 4. 未解決の問題

| 項目 | 状態 | 詳細 |
|------|------|------|
| metadataBase警告 | 軽微 | ビルド時に警告が出るが動作に影響なし |
| Homepage連携 | 要対応 | 環境変数設定と再デプロイが必要 |

---

## 5. 重要なコンテキスト

### プロジェクト構成
```
/Users/upa/systemDev/ydSystem/
├── homepage/     # コーポレートサイト本体
└── analytics/    # 自社製アナリティクス
```

### アナリティクス設計思想
- **GA4より使いやすく**: シンプルなダッシュボード
- **複数サイト対応**: site_id で管理
- **プライバシー配慮**: Cookie不使用、sessionStorageのみ
- **自社管理**: データは自社DBに保存

### 環境変数

#### Analytics（Vercel）
| 変数名 | 環境 | 値 |
|--------|------|-----|
| DATABASE_URL | production, preview, development | postgresql://neondb_owner:xxx@ep-cool-hill-a1o0g33c-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require |

#### Homepage（Vercel）※要設定
| 変数名 | 環境 | 値 |
|--------|------|-----|
| NEXT_PUBLIC_ANALYTICS_URL | production | https://analytics-six.vercel.app |

---

## 6. 関連ファイル

### Analytics プロジェクト
| ファイルパス | 説明 |
|-------------|------|
| `analytics/src/app/page.tsx` | ダッシュボードUI |
| `analytics/src/app/api/track/route.ts` | トラッキングAPI |
| `analytics/src/app/api/stats/route.ts` | 統計取得API |
| `analytics/src/lib/db.ts` | DB接続（lazy initialization） |
| `analytics/src/lib/schema.sql` | DBスキーマ |
| `analytics/public/tracker.js` | クライアントスクリプト |
| `analytics/.env.local` | ローカル環境変数 |

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

### Analytics
| 項目 | 値 |
|------|-----|
| **本番URL** | https://analytics-six.vercel.app |
| Vercelプロジェクト | naotos-projects-6818d7a3/analytics |
| データベース | Neon PostgreSQL (yd-analytics) |
| リージョン | ap-southeast-1 (シンガポール) |

---

## 8. Neon データベース情報

### 接続情報
| 項目 | 値 |
|------|-----|
| プロジェクト名 | yd-analytics |
| プロジェクトID | royal-bar-97768223 |
| ブランチ | production |
| データベース名 | neondb |
| ロール | neondb_owner |
| エンドポイント | ep-cool-hill-a1o0g33c-pooler |
| リージョン | ap-southeast-1.aws.neon.tech |
| Connection Pooling | 有効 |

### テーブル構成
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
  referrer TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  country TEXT,
  city TEXT,
  first_seen TIMESTAMP DEFAULT NOW(),
  last_seen TIMESTAMP DEFAULT NOW()
);

-- イベント
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  site_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,  -- pageview, scroll, click, leave
  url TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  country TEXT,
  city TEXT,
  scroll_depth INTEGER,
  click_target TEXT,
  time_on_page INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 9. tracker.js 使い方

Homepage以外のサイトでもトラッキングを使う場合：

```html
<script
  src="https://analytics-six.vercel.app/tracker.js"
  data-site-id="site-name"
  defer
></script>
```

新しいサイトを追加する場合は、Neon の sites テーブルにサイトを登録：
```sql
INSERT INTO sites (id, name, domain) VALUES ('site-name', 'サイト名', 'example.com');
```

---

## 10. トラブルシューティング

### パスワード認証エラー
```
NeonDbError: password authentication failed for user 'neondb_owner'
```

**対処法**:
1. Neonコンソールでパスワードをリセット
2. Vercel環境変数を更新（全環境）
3. `vercel --prod --yes --force` で再デプロイ

### 環境変数が反映されない
**対処法**:
- `vercel env ls` で確認
- `--force` オプションでキャッシュクリア

### APIが500エラーを返す
**確認事項**:
- `vercel logs` でエラー内容確認
- DATABASE_URL が正しく設定されているか
- Neonプロジェクトがアクティブか（無料プランは非アクティブになる場合あり）
