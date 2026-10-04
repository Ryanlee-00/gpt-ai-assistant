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

- 實際檢視日期：2026-10-04（第一次手動 Dreaming；使用指定五份去敏摘要）。上方管理區塊保留初始化器模板；其中日期佔位符不代表本專案檢視日期。
- Cloud 共用來源：依根目錄 `AGENTS.md` bootstrap，以 Git remote 驗證 `Ryanlee-00/codex-shared-guidance` checkout，直接讀取其 `AGENTS.md` 與 `memory/index.md`；此設定優先於上方模板的 `$CODEX_HOME` 安裝路徑。
- [DEC-2026-10-04-001](decisions.md#dec-2026-10-04-001--cloud-專案記憶載入)：Cloud direct-read 正式驗收、多 task 證據與全域副本觀察範圍（verified；project-only）。
- [LESSON-2026-10-04-001](lessons.md#lesson-2026-10-04-001--jest-測試模式與網路依賴)：Jest 的非 production 行為與版本查詢依賴（verified 程式行為；project-only）。
- [LESSON-2026-10-04-002](lessons.md#lesson-2026-10-04-002--cloud-驗證錯誤須保留環境差異)：所選 Cloud tasks 的 Jest／Express 差異（verified observations；causal diagnosis unverified；project-only）。

- 本次證據：`01a10517-470d-712f-89e9-06c542aaa0b4`、`01a1051c-212c-734d-94b3-fce6e77080b4`、`01a10523-48be-7608-9744-5a36b100709d`、`01a1052b-8027-7452-b006-7d6927bae0b8`、`01a10534-ace7-75aa-b641-d58430b2b014`；來源為使用者提供的精簡摘要，未讀取完整聊天。
- 未提升共用記憶；單次 bwrap 失敗與 PR API Forbidden 未形成固定 lesson。
