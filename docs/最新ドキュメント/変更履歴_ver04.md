# 変更履歴 ver04

## 概要
YDシステム会社コーポレートサイトの変更履歴

---

## ver04 (2026-01-26)

### ブログ機能強化

#### カテゴリ機能追加
- `src/lib/blog.ts`: BlogPost interfaceにcategory追加
- `src/components/BlogCard.tsx`: カテゴリバッジ表示追加

#### 26記事作成
日付: 2026-01-01〜2026-01-26（毎日1記事形式）

**技術記事（10本）**
- スクラッチ開発、生成AIリスク、プロンプトエンジニアリング
- AIチャットボット、ノーコード限界、開発ツール比較
- AIコード品質、中小企業AI導入、RAG、生成AI開発

**AI最新動向記事（16本）**
- AI業界CEOの発言引用（Altman、Amodei、Hassabis、Huang）
- Goldman Sachs、McKinseyレポート引用
- arXiv論文引用（AIエージェント研究）
- Claude Opus 4.5、マルチモーダルAI、Microsoft Copilot
- xAI Grok、データ戦略、AI活用ロードマップ

### 問い合わせフォーム改善

#### メールバリデーション強化
```typescript
// 変更前
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 変更後（ASCII文字のみ）
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

#### 電話番号バリデーション追加
```typescript
const isValidPhoneFormat = (phone: string): boolean => {
  if (!phone) return true;
  const normalized = phone.replace(/[-\s]/g, '');
  if (!/^0\d{9,10}$/.test(normalized)) return false;
  return true;
};
```

### CTAセクション削除

以下のページから「お気軽にお問い合わせください」セクションを削除：
- `src/app/page.tsx`（Home）
- `src/app/business/page.tsx`（Business）
- `src/app/company/page.tsx`（Company）

→ 問い合わせはContactページのみから

### 事業内容更新

`src/app/company/page.tsx`の事業内容を変更：
- 変更前: システム開発
- 変更後: システム開発、AI活用支援

---

## ver03 (2026-01-23)

### デザインリニューアル
- Pythiac風ダークテーマに変更
- Three.js 3D球体をメインビジュアルに採用
- グロー背景効果追加

### ページ構成変更
- Service → Businessにリネーム
- Worksページ削除
- ブログ機能追加

### セクション整理
- サービスページ: 強み、開発フロー、FAQ追加
- 会社概要: ミッション、価値観、代表紹介追加

---

## ver02 (2026-01-16)

### コーポレートサイトらしさの強化
- 業界特化の訴求を削除
- LP感のあるセクションを整理

---

## ver01 (2026-01-15)

### 初回リリース
- Next.js 16 + TypeScript + Tailwind CSSでプロジェクト作成
- 基本ページ構成を実装
- Vercelへデプロイ

---

## 現在のファイル構成

```
homepage/
├── src/
│   ├── app/
│   │   ├── page.tsx              # トップページ
│   │   ├── layout.tsx            # ルートレイアウト
│   │   ├── globals.css           # グローバルスタイル
│   │   ├── business/
│   │   │   └── page.tsx          # 事業内容ページ
│   │   ├── company/
│   │   │   └── page.tsx          # 会社概要ページ
│   │   ├── contact/
│   │   │   └── page.tsx          # お問い合わせページ
│   │   └── blog/
│   │       ├── page.tsx          # ブログ一覧
│   │       └── [slug]/
│   │           └── page.tsx      # ブログ詳細
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ParticleSphere.tsx    # 3D球体
│   │   ├── BlogCard.tsx          # ブログカード
│   │   └── ScrollAnimationWrapper.tsx
│   ├── content/
│   │   └── blog/                 # 26記事のMarkdownファイル
│   └── lib/
│       └── blog.ts               # ブログユーティリティ
├── public/
└── docs/
    ├── 最新ドキュメント/
    ├── 過去ドキュメント/
    └── セッション引き継ぎ/
```
