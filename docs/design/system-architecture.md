# システムアーキテクチャ設計（System Architecture）

- **対象プロジェクト名**: 西川農園 コーポレートサイト  
- **参照元**: `detailed_requirements_specification.md`（9. 技術選定とアーキテクチャ）  
- **更新日**: 2026-02-01  

---

## 1. 目的

本ドキュメントは、西川農園コーポレートサイトにおける  
**システム全体の技術構成、主要コンポーネントの責務、データの流れ、  
および Next.js（App Router）を中心とした実装方針**を明確にすることを目的とする。

本サイトは以下を前提とする。

- 売上を直接生まない「名刺代わり」の公式サイト
- 静的ページ中心、動的処理は問い合わせ機能のみ
- 学生主体での開発・運用
- 将来の拡張（CMS / EC 等）を阻害しない構成

---

## 2. 技術スタック

低予算・高スピード開発・保守性を重視し、以下の技術スタックを採用する。

- **フロントエンド**: Next.js 15（App Router）
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **バックエンド処理**: Next.js Server Actions
- **データベース**: Supabase（PostgreSQL）
- **ホスティング / CDN**: Vercel
- **スパム対策（問い合わせ）**:  
  reCAPTCHA v3 または Cloudflare Turnstile（いずれか）

### 選定理由

- **低予算**  
  Vercel / Supabase の無料枠を前提に運用可能。
- **学生運用**  
  Next.js / TypeScript は学習リソースが豊富で属人化しにくい。
- **開発スピード**  
  Cursor 等の AI ツールと親和性が高く、要件〜実装までの往復が高速。
- **将来拡張性**  
  App Router + Server Actions により、CMS・管理画面追加にも対応可能。

---

## 3. アーキテクチャ概要

### 3.1 全体構成図

```mermaid
graph TD
    User[ユーザー] -->|HTTPS| Vercel[Next.js App Router on Vercel]
    Vercel -->|SSG / ISR| Edge[Vercel Edge Network]
    Vercel -->|Server Actions| Supabase[(Supabase PostgreSQL)]
    Vercel -->|External Links| SNS[Instagram / X / その他SNS]
