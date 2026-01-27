# セッション引き継ぎ ver5

## 最終更新日時
2026-01-26

---

## 1. 現在の作業内容

### 完了した作業
YDシステムのコーポレートサイトのブログ機能を大幅強化。26記事を作成し、AI業界トップ（Altman、Amodei、Hassabis、Huang）の発言引用やGoldman Sachs/McKinseyのレポート引用を含む高品質なコンテンツを追加。問い合わせフォームのバリデーション改善、CTAセクションの整理も実施。

### 進捗状況
- ブログ記事作成: 100%完了（26記事）
- 問い合わせフォーム改善: 100%完了
- CTAセクション整理: 100%完了
- 事業内容更新: 100%完了
- デプロイ: 100%完了

---

## 2. 完了したタスク

### ブログ機能強化（2026-01-26）

#### カテゴリ機能追加
- BlogPost interfaceにcategory追加
- BlogCardにカテゴリバッジ表示
- カテゴリ: AI活用、技術解説、システム開発、AI最新動向

#### 26記事作成（2026-01-01〜01-26）

**技術記事（01/01〜01/10）**
| 日付 | ファイル名 | タイトル |
|------|-----------|---------|
| 01/01 | why-scratch-development-now.md | なぜ今スクラッチ開発なのか？AI時代の開発戦略 |
| 01/02 | generative-ai-risks.md | 生成AIの業務活用｜中小企業が押さえるべきリスクと対策 |
| 01/03 | prompt-engineering-practice.md | プロンプトエンジニアリング実践ガイド |
| 01/04 | ai-chatbot-business.md | AIチャットボットで問い合わせ対応を効率化 |
| 01/05 | nocode-lowcode-limits.md | ノーコード・ローコードの限界とスクラッチ開発の価値 |
| 01/06 | ai-dev-tools-comparison.md | Claude Code・GitHub Copilot・Cursor比較 |
| 01/07 | ai-code-quality.md | AIが生成したコードは安全か？品質管理の重要性 |
| 01/08 | sme-ai-success.md | 中小企業がAI導入で成功するための5つのポイント |
| 01/09 | what-is-rag.md | RAG（検索拡張生成）とは？ |
| 01/10 | generative-ai-system-development.md | 生成AIを活用したシステム開発の現在地 |

**AI最新動向記事（01/11〜01/20）**
| 日付 | ファイル名 | 引用元 |
|------|-----------|--------|
| 01/11 | ai-2026-predictions-summary.md | 各社CEO予測まとめ |
| 01/12 | ai-regulation-debate.md | Amodei規制論 |
| 01/13 | ai-scientific-discovery.md | Altman科学的発見予測 |
| 01/14 | deepmind-agi-breakthroughs.md | Hassabis AGI見解 |
| 01/15 | nvidia-ai-infrastructure.md | Huang AIインフラ論 |
| 01/16 | openai-enterprise-2026.md | OpenAI戦略 |
| 01/17 | anthropic-safety-research.md | Anthropic安全性研究 |
| 01/18 | ai-agent-research-2026.md | arXiv論文引用 |
| 01/19 | ai-jobs-impact-research.md | Goldman Sachs/McKinsey |
| 01/20 | ai-leaders-2026-vision.md | 3社CEO発言まとめ |

**追加記事（01/21〜01/26）**
| 日付 | ファイル名 | タイトル |
|------|-----------|---------|
| 01/21 | claude-opus-4-business.md | Claude Opus 4.5の登場 |
| 01/22 | multimodal-ai-business.md | マルチモーダルAIとは？ |
| 01/23 | microsoft-copilot-enterprise.md | Microsoft Copilotの企業導入 |
| 01/24 | ai-data-strategy.md | AI時代のデータ戦略 |
| 01/25 | sme-ai-roadmap-2026.md | 中小企業のためのAI活用ロードマップ2026 |
| 01/26 | xai-grok-latest.md | Elon Muskが率いるxAI |

### 問い合わせフォーム改善（2026-01-26）
- **メールバリデーション強化**: ASCII文字のみ許可（日本語文字を含むアドレスをエラーに）
- **電話番号バリデーション追加**: 携帯・固定両方OK、ハイフンあり/なし両対応

### CTAセクション削除（2026-01-26）
以下のページから「お気軽にお問い合わせください」セクションを削除：
- Home (`/`)
- Business (`/business`)
- Company (`/company`)

→ 問い合わせはContactページ(`/contact`)のみから

### 事業内容更新（2026-01-26）
会社概要ページの事業内容を更新：
- 変更前: システム開発
- 変更後: システム開発、AI活用支援

---

## 3. 次にやるべきこと

### 優先度高
なし（現状で一通り完成）

### 優先度中
1. **導入事例・実績の追加**: 実績ができたら追加
2. **より具体的なサービス説明**: 技術スタック、開発プロセス、料金目安など（ユーザー判断で「一旦不要」）

### 優先度低
1. **Google Analytics導入**: アクセス解析
2. **サイトマップ作成**: SEO対策

---

## 4. 未解決の問題

| 項目 | 状態 | 詳細 |
|------|------|------|
| metadataBase警告 | 軽微 | ビルド時に警告が出るが動作に影響なし |

---

## 5. 重要なコンテキスト

### プロジェクト概要
- **目的**: YDシステム会社のコーポレートサイト
- **ターゲット**: システム発注に慣れていない中小企業の経営者・担当者
- **コンセプト**: 技術力・AI知見をブログでアピールし、信頼性を構築

### ブログ戦略
- **目的**: 売上向上のための信頼性構築
- **ターゲット読者**: 中小企業
- **コンテンツ方針**:
  - AI業界トップ（Altman、Amodei、Hassabis、Huang）の発言引用
  - Goldman Sachs、McKinseyなどの調査レポート引用
  - arXiv論文の引用
  - 実務に役立つ技術解説

### デザイン方針（現行）
- **Pythiac風のダークテーマ**: ダークネイビー背景 + 青紫グラデーション
- **3D球体がメインビジュアル**: Three.jsで実装
- **グラスモーフィズム**: カード等に半透明効果

### 技術スタック
- Next.js 16.1.2（App Router）
- TypeScript
- Tailwind CSS
- Three.js / React Three Fiber / @react-three/drei
- Framer Motion
- gray-matter / remark / remark-html（ブログ用）
- Vercel（ホスティング）

### 特記事項（重要）
- **特定業界への特化は謳わない**: 実際に特化していないため
- 価格表は掲載しない（個別見積りのため）
- 顧客名・顧客の顔写真は掲載しない
- **所在地は掲載しない**
- **CTAはContactページのみ**（各ページから誘導セクション削除済み）

---

## 6. 関連ファイル

### メインファイル
| ファイルパス | 説明 |
|-------------|------|
| `src/app/page.tsx` | トップページ（3D球体 + テキスト） |
| `src/app/layout.tsx` | ルートレイアウト |
| `src/app/globals.css` | グローバルスタイル |
| `src/components/ParticleSphere.tsx` | 3D球体コンポーネント |

### ページファイル
| ファイルパス | 説明 |
|-------------|------|
| `src/app/business/page.tsx` | 事業内容ページ |
| `src/app/company/page.tsx` | 会社概要ページ |
| `src/app/contact/page.tsx` | お問い合わせページ |
| `src/app/blog/page.tsx` | ブログ一覧ページ |
| `src/app/blog/[slug]/page.tsx` | ブログ詳細ページ |

### ブログコンテンツ
| ファイルパス | 説明 |
|-------------|------|
| `src/content/blog/*.md` | 26記事のMarkdownファイル |
| `src/lib/blog.ts` | ブログユーティリティ |
| `src/components/BlogCard.tsx` | ブログカード（カテゴリバッジ付き） |

---

## 7. デプロイ情報

| 項目 | 値 |
|------|-----|
| **本番URL** | https://www.yd-system.com |
| Vercelプロジェクト | naotos-projects-6818d7a3/homepage |
| デプロイコマンド | `npx vercel --prod` |

---

## 8. ナビゲーション構成

```
Home (/)
├── Business (/business)
├── Blog (/blog)
│   └── [slug] (/blog/[slug]) - 26記事
├── Company (/company)
└── Contact (/contact)
```

---

## 9. ブログカテゴリ構成

| カテゴリ | 記事数 | 内容 |
|---------|--------|------|
| AI活用 | 6記事 | 中小企業向けAI導入ガイド |
| 技術解説 | 4記事 | RAG、プロンプト、開発ツール比較等 |
| システム開発 | 2記事 | スクラッチ開発、ノーコード比較 |
| AI最新動向 | 14記事 | CEO発言、研究レポート、論文引用 |
