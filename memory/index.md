# Project Memory Index

<!-- BEGIN CODEX PROJECT MEMORY INDEX FORMAT -->
- Last reviewed: YYYY-MM-DD
- Scope: this repository
- Shared baseline: `$CODEX_HOME/shared-guidance/memory/index.md`

## Files

- [`decisions.md`](decisions.md): durable project decisions and their rationale.
- [`lessons.md`](lessons.md): verified project-specific solutions and reusable experience.

Read only the detail files relevant to the current task. Project entries supplement the shared layer and should not duplicate it.
<!-- END CODEX PROJECT MEMORY INDEX FORMAT -->

## Project-specific topics

- 實際檢視日期：2026-10-04。上方管理區塊保留初始化器模板；其中日期佔位符不代表本專案檢視日期。
- Cloud 共用來源：依根目錄 `AGENTS.md` bootstrap，以 Git remote 驗證 `Ryanlee-00/codex-shared-guidance` checkout，直接讀取其 `AGENTS.md` 與 `memory/index.md`；此設定優先於上方模板的 `$CODEX_HOME` 安裝路徑。
- [DEC-2026-10-04-001](decisions.md#dec-2026-10-04-001--cloud-專案記憶載入)：Cloud 載入與模板維護。
- [LESSON-2026-10-04-001](lessons.md#lesson-2026-10-04-001--jest-測試模式與網路依賴)：Jest 的非 production 行為與版本查詢依賴。
