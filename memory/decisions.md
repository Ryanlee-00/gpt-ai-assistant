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
- Source: 根目錄 `AGENTS.md`；既有 bootstrap commit `8fcd818603ccbe7414d9a16104053072311e9aea`；共用來源 `Ryanlee-00/codex-shared-guidance` commit `a69a0f1257691c2f517c68cec365b6dc116e96e6` 的 `scripts/init_project_memory.py` 與 `templates/project/`。Dreaming 摘要證據（使用者提供，未重讀原始聊天）：`01a10517-470d-712f-89e9-06c542aaa0b4`、`01a1051c-212c-734d-94b3-fce6e77080b4`、`01a10523-48be-7608-9744-5a36b100709d`、`01a1052b-8027-7452-b006-7d6927bae0b8`、`01a10534-ace7-75aa-b641-d58430b2b014`。
- Validation status: verified（既有 bootstrap／初始化器來源已核對；五份 task 摘要支持 direct-read，最後 fresh task 明確驗收通過；不代表所有 Cloud 環境均相同）
- Promotion: project-only
- Decision: 保留 Cloud bootstrap，以已驗證 remote 的共用 checkout direct-read 作為本專案 Cloud 正式且可驗收的共用載入方式，再讀取此專案 `memory/index.md`；詳細記憶按主題讀取。
- Rationale: 本專案已有明確的 Cloud bootstrap，無須依賴暫存 runtime 的全域安裝副本。
- Consequences: 共用 checkout 缺失或來源不明時須回報未載入；不宣稱自動同步。初始化器管理區塊保留原樣，實際日期與 Cloud 來源寫在索引的專案補充區，使完整初始化器 `--check` 仍可驗證模板。

- Evidence: 前三份摘要反覆觀察 `CODEX_HOME=/run/codex-environment/codex-home` 下 global AGENTS 與 shared memory index 缺失、installer check exit 1，但 direct-read 成功且共用 tests／validation 通過。第四份 fresh task 未出現 `/workspace/AGENTS.md`、`/workspace/shared-guidance/memory/*` 或 Start Skill bootstrap，指定 `/workspace` 的 installer check exit 1，專案 bootstrap／來源 direct-read 仍成功。第五份 fresh task 的 bootstrap-only check 與共用測試通過，global 副本仍缺失。
- Observation boundary: 全域副本缺失只描述這些 gpt-ai-assistant Cloud task；installer check 未通過不能推導 direct-read 未載入，也不能推導所有 Cloud 都沒有全域副本。本次離線 Dreaming 以 `32d4eef9c45289951cd1e34e9d459805147407a9` 為基底；PR #2 merge commit `5ae51e2fd0df25ac2d2be2c7537f3598c1fa200b` 的合併狀態採使用者 GitHub UI 確認，未重新 fetch 驗證。
