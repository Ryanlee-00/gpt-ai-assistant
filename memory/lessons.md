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

## LESSON-2026-10-04-002 — Cloud 驗證錯誤須保留環境差異

- Date: 2026-10-04
- Scope: 僅限所選 gpt-ai-assistant Cloud tasks 的 Jest version check 與 Express smoke test
- Source: `01a10517-470d-712f-89e9-06c542aaa0b4`、`01a1051c-212c-734d-94b3-fce6e77080b4`、`01a10523-48be-7608-9744-5a36b100709d`、`01a10534-ace7-75aa-b641-d58430b2b014`（使用者提供的去敏摘要，未重讀原始聊天）。
- Validation status: verified（摘要所支持的重複觀察與回報界線）；causal diagnosis unverified／proposed（未取得可比較的重驗證，單一根因未確認）。
- Promotion: project-only
- Lesson: 保留各 task 的環境差異與相互矛盾證據，不能推導所有 Cloud 的固有限制或單一根因；未取得可比較的重驗證前，不將觀察當成 app bug 或固定解法。

- Evidence: `01a10517-470d-712f-89e9-06c542aaa0b4` 與 `01a1051c-212c-734d-94b3-fce6e77080b4` 的 Jest 為 9/10，記錄 connect EPERM；`01a10523-48be-7608-9744-5a36b100709d` 為 9/10，記錄 proxy connect EPERM 與 restricted network／policy unknown。三份摘要均記錄 Express listen EPERM，僅支持那些執行的連線或監聽受限，不證明程式失敗，也不建立所有 Cloud 的固定限制。
- Conflicting evidence: `01a10534-ace7-75aa-b641-d58430b2b014` 的 Jest 同為 9/10，但錯誤為 Axios `ERR_FR_TOO_MANY_REDIRECTS`，同一 URL 用 Python 查詢得到 HTTP 200。保留這個差異；不能將 proxy connect EPERM、redirect loop 與 Python 成功歸結為單一原因或全面網路封鎖。
- Reusable handling: 回報實際失敗命令、錯誤種類與已完成驗證，將 sandbox 操作限制和應用程式斷言失敗分開；未取得可比較的重驗證前，不把這些觀察當成固定的 app bug 或解法。本次 Dreaming 只整理既有證據，未重跑 Jest／Express。
