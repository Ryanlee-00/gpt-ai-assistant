# Project Lessons

<!-- BEGIN CODEX PROJECT LESSON FORMAT -->
## Entry format

```markdown
## LESSON-YYYY-MM-DD-NNN — Short title

- Date: YYYY-MM-DD
- Scope: affected component or workflow
- Source: task record, error output, commit, or test that can be reviewed
- Validation status: proposed | verified | superseded
- Promotion: project-only | candidate-for-shared | promoted-to-shared ENTRY-ID
- Lesson: verified reusable guidance
```

Do not convert a guess or one successful run into a fixed rule. Dreaming may consolidate duplicates and mark stale entries, but it must retain sources and explain the evidence.
<!-- END CODEX PROJECT LESSON FORMAT -->

## Entries

## LESSON-2026-10-04-001 — Jest 測試模式與網路依賴

- Date: 2026-10-04
- Scope: gpt-ai-assistant 的 Jest 測試與 completion、版本查詢
- Source: `package.json` 的 `test` script；`babel.config.cjs`；`config/index.js` 的 `APP_ENV`；`utils/generate-completion.js`；`utils/fetch-version.js`；`tests/version.test.js`。
- Validation status: verified（已核對程式與測試來源；此項描述程式行為，不保證所有測試通過）
- Promotion: project-only
- Lesson: `npm test -- --runInBand` 使用 Jest；completion 在 `APP_ENV` 非 `production` 時回傳 mock，而版本查詢仍會透過 Axios 讀取上游 `memochou1993/gpt-ai-assistant` 的 `main/package.json`。因此測試的 mock completion 不代表整個測試套件離線；版本查詢失敗須依實際錯誤區分網路限制與程式問題。本專案沒有 `lint` npm script，既有 ESLint 設定為 `.eslintrc.cjs`，可用本機 ESLint 執行檢查。
