<!-- BEGIN CODEX CLOUD BOOTSTRAP -->
## 共用指引載入（Cloud bootstrap）

- 每次任務開始時，在專案根目錄、其父目錄與工作區（Cloud 通常為 `/workspace`）尋找 Git checkout；用 `git -C <候選路徑> remote -v` 確認 remote 對應 GitHub `Ryanlee-00/codex-shared-guidance`（接受 HTTPS／SSH 與可選的 `.git` 後綴），不得只憑目錄名稱判定。
- 從確認的 checkout 讀取 `AGENTS.md` 與 `memory/index.md`，再依索引按需讀取詳細記憶；`codex-shared-guidance` 是共用指引唯一正式來源，不依賴暫存的 `$CODEX_HOME` 安裝副本。
- 專案根目錄 `AGENTS.md` 是更具體且優先的補充；若有專案 `memory/index.md`，在共用索引之後讀取。
- 找不到符合 remote 的 checkout、存在多個無法判定的 checkout，或必要檔案缺失／無法讀取時，明確回報「共用指引未載入」及原因；不得假裝已載入。找到並讀取成功後，回報實際來源路徑。
<!-- END CODEX CLOUD BOOTSTRAP -->

<!-- BEGIN CODEX PROJECT MEMORY GUIDANCE -->
## 專案記憶

- 任務開始時，在共用記憶索引之後讀取 `memory/index.md`；只有在相關時才開啟 `memory/decisions.md` 或 `memory/lessons.md`。
- 將此儲存庫的指引與記憶視為共用基礎的專案層補充；更具體的專案規則優先。
- 任務完成時，以日期、適用範圍、來源與驗證狀態記錄重要專案決策、已驗證解法及可重用經驗。
- 新經驗預設保留在此專案；只有證據顯示可跨專案使用時，才標示為共用記憶候選。
- 不要重複共用規則；引用共用項目，並只記錄本專案的例外或補充。
<!-- END CODEX PROJECT MEMORY GUIDANCE -->
