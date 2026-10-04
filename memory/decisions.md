# Project Decisions

<!-- BEGIN CODEX PROJECT DECISION FORMAT -->
## Entry format

```markdown
## DEC-YYYY-MM-DD-NNN — Short title

- Date: YYYY-MM-DD
- Scope: affected component or workflow
- Source: issue, task, commit, test, or other reviewable evidence
- Validation status: proposed | verified | superseded
- Decision: what was chosen
- Rationale: why it was chosen
- Consequences: important tradeoffs or follow-up
```

Do not record secrets, full conversations, or unsupported assumptions. Mark an older entry as superseded instead of silently rewriting its history.
<!-- END CODEX PROJECT DECISION FORMAT -->

## Entries

## DEC-2026-10-04-001 — Cloud 專案記憶載入

- Date: 2026-10-04
- Scope: gpt-ai-assistant 的 Cloud bootstrap 與專案記憶層
- Source: 根目錄 `AGENTS.md`；既有 bootstrap commit `8fcd818603ccbe7414d9a16104053072311e9aea`；共用來源 `Ryanlee-00/codex-shared-guidance` commit `a69a0f1257691c2f517c68cec365b6dc116e96e6` 的 `scripts/init_project_memory.py` 與 `templates/project/`。
- Validation status: verified（已讀取來源與既有 bootstrap；以官方初始化器合併）
- Decision: 保留 Cloud bootstrap，以已驗證 remote 的共用 checkout direct-read 作為共用載入方式，再讀取此專案 `memory/index.md`；詳細記憶按主題讀取。
- Rationale: 本專案已有明確的 Cloud bootstrap，無須依賴暫存 runtime 的全域安裝副本。
- Consequences: 共用 checkout 缺失或來源不明時須回報未載入；不宣稱自動同步。初始化器管理區塊保留原樣，實際日期與 Cloud 來源寫在索引的專案補充區，使完整初始化器 `--check` 仍可驗證模板。
