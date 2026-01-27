# homepage プロジェクト個別ルール

## デプロイ

### Vercelデプロイ（重要）
- **自動デプロイは設定されていない**
- git push後、必ず手動でデプロイを実行すること

```bash
vercel --prod
```

- デプロイ完了後、本番URL（https://www.yd-system.com）で確認

---

## 技術スタック

- Next.js 16
- TypeScript
- Tailwind CSS
- Vercel（ホスティング）

---

## ブログ記事

- 記事ファイル: `src/content/blog/*.md`
- アーカイブ: `src/content/blog-archive/`（バックアップ用）
- フォーマット: frontmatter付きMarkdown

---

**ドキュメント終了**
