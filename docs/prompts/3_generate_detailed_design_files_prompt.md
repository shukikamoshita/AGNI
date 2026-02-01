# 個別詳細設計ドキュメント生成プロンプト（Cursor用｜西川農園コーポレートサイト）

あなたは **経験豊富なリードエンジニア兼システムアーキテクト**です。  
以下の指示に従い、提供された詳細要件定義書を基に、コーポレートサイト実装に直結する **専門領域別の詳細設計ドキュメント**を、指定のファイルとして生成してください。

本プロジェクトは「名刺代わりのコーポレートサイト」です。  
**静的ページ中心、動的要素は問い合わせフォームのみ**を原則とし、過剰な機能・設計を追加しないでください。

---

## 入力情報

1. **詳細要件定義書**  
   `docs/output/detailed_requirements_specification.md`  
   - すべての情報の源泉  
   - 設計ファイルはこの内容を正確に抽出して反映すること  
   - 不足があれば合理的に補完してよいが、その場合は **(仮定)** を明記すること

---

## 出力形式

以下の5つのMarkdownファイルを `docs/design/` ディレクトリに生成してください。  
ディレクトリが存在しない場合は作成してください。

1. `docs/design/system-architecture.md`
2. `docs/design/database-design.md`
3. `docs/design/api-specification.md`
4. `docs/design/ui-ux-design.md`
5. `docs/design/development-plan.md`

---

## 共通ルール（重要）

- 各ファイルの冒頭に以下のメタ情報を必ず記載する  
  - 対象プロジェクト名  
  - 参照元（detailed_requirements_specification.md の該当章番号）  
  - 更新日（生成日でよい）  
- 「コーポレートサイトとして必要十分」な内容に限定し、過剰設計は避ける  
- Mermaid図は **コピペでレンダリング可能な正しい構文**で出力する  
- 認証・管理画面・会員機能は原則対象外（要件に記載がある場合のみ扱う）  
- DBは原則「問い合わせ保存」程度の最小構成  
- APIは原則「問い合わせ送信」程度の最小構成  
- 実装者が迷わないように、**ディレクトリ構成や命名規則**を明示する

---

## 生成手順

`docs/output/detailed_requirements_specification.md` を読み込み、以下の指示に従って各ファイルを生成してください。

---

# 1. docs/design/system-architecture.md

## 目的
システム全体の技術構成とコンポーネント間の連携、Next.js(App Router)の実装方針を明確にする。

## 含める内容（転記＋実装向けに整理）
- 対象：詳細要件定義書の「9. 技術選定とアーキテクチャ」
- 技術スタック一覧（必須）
  - Next.js(App Router) / TypeScript / TailwindCSS / Vercel / Supabase
  - 可能ならフォーム用に reCAPTCHA 等のスパム対策方針も補足
- 選定理由
  - 低予算、学生運用、スピード開発、保守性
- アーキテクチャ概要図（Mermaid）
  - Vercel / Next.js / Supabase / 外部（SNSリンク等）の関係
  - 各コンポーネントの役割を文章で補足
- Next.js App Router 前提の設計指針
  - Server Components / Client Components の使い分け基準
  - データ取得方針（原則静的、問い合わせのみAPI）
- 推奨ディレクトリ構成（例）
  - `app/` 配下のルーティング
  - `components/`（UIコン
