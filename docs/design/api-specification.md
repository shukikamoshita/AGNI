# API仕様書 (API Specification)

- **対象プロジェクト名**: 西川農園 コーポレートサイト
- **参照元**: `detailed_requirements_specification.md` (8. インテグレーション要件)
- **更新日**: 2026-02-01

## 1. 目的
フロントエンドとバックエンド（または外部SaaS）間の通信インターフェースを定義する。

## 2. API一覧

### 2.1 お問い合わせ送信

| 項目 | 内容 |
|---|---|
| エンドポイント | `POST /api/contact` または Next.js Server Action |
| 概要 | お問い合わせフォームからの入力をDBに登録する |
| 形式 | JSON |

#### リクエスト
```json
{
  "name": "山田 太郎",
  "email": "taro.yamada@example.com",
  "message": "桃の注文について相談したいです。"
}
```

#### レスポンス (成功)
- ステータスコード: `201 Created`
```json
{
  "success": true,
  "id": "uuid-0000-1111..."
}
```

#### レスポンス (エラー)
- ステータスコード: `400 Bad Request`
```json
{
  "error": "Invalid email address"
}
```

## 3. 実装方針
Next.js 14+ の **Server Actions** を第一候補として検討する。これにより Web API のエンドポイントを明示的に定義することなく、安全に Supabase へデータを登録可能。

## 4. バリデーション
- `name`: 必須、100文字以内
- `email`: 必須、メールアドレス形式
- `message`: 必須、1000文字以内
