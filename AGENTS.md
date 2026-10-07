<!-- BEGIN CODEX CLOUD BOOTSTRAP -->
## 共用指引載入（Cloud bootstrap）

- 每次任務開始時，先讀取專案根目錄 `shared-guidance.lock.json`；只接受 `schema_version: 2`、repository `https://github.com/Ryanlee-00/codex-shared-guidance`、完整 `refs/tags/...` 的 `ref`，以及 40 字元小寫十六進位 `revision`。不接受 branch 作為 immutable 版本證明。
- 在專案根目錄、其父目錄與工作區（Cloud 通常為 `/workspace`）尋找 Git checkout；用 `git -C <候選路徑> remote get-url origin` 確認 remote 對應 lock 的 repository（接受 HTTPS／SSH 與可選的 `.git` 後綴），不得只憑目錄名稱判定。
- 驗證 candidate 前不得執行其中的 updater、installer 或其他程式。只用受信任的系統 Git plumbing 檢查：worktree policy 為 clean、`git rev-parse HEAD` 等於 lock revision，且 `git ls-remote origin <ref> <ref>^{}` 顯示該 tag（或 annotated tag 的 peeled 值）精確等於 revision。
- 對 `AGENTS.md`、`memory/index.md` 與其後按需讀取的每個共用檔案，先用 `git ls-tree <revision> -- <path>` 確認它是 mode `100644` 或 `100755` 的 `blob`，再以 `git show <revision>:<path>` 從 commit blob 讀取；不得將 mutable worktree bytes 當成已驗證內容。
- 缺失、lock 解析錯誤、失配、dirty、tag 未發布或未精確指向 revision、blob mode/path 異常、Git 檢查失敗或存在多個合格 checkout 時，fail closed 並明確回報「共用指引未載入」及原因；不得自行 fetch、切換或安裝。
- 驗證成功後，依上述 blob-only 方式載入共用 `AGENTS.md`、`memory/index.md` 與必要詳細記憶；Cloud 不需安裝至 `$CODEX_HOME`。
- 專案根目錄 `AGENTS.md` 是更具體且優先的補充；若有專案 `memory/index.md`，在共用索引之後讀取。
- 必要檔案缺失／無法讀取時同樣 fail closed。找到並讀取成功後，回報實際來源路徑與已驗證 revision。
<!-- END CODEX CLOUD BOOTSTRAP -->

<!-- BEGIN CODEX PROJECT MEMORY GUIDANCE -->
## 專案記憶

- 任務開始時，在依 installed 或 Cloud direct-read 模式驗證並讀取共用記憶索引後，再讀取專案 `memory/index.md`；只有在相關時才開啟 `memory/decisions.md` 或 `memory/lessons.md`。Cloud direct-read 不以 `$CODEX_HOME` 存在全域副本為必要條件。
- 將此儲存庫的指引與記憶視為共用基礎的專案層補充；更具體的專案規則優先。
- 只有本次任務的授權寫入集合明確包含相應 memory 路徑時才回寫：長期有效的專案決策寫入 `memory/decisions.md`；已驗證且可重用的解法或經驗寫入 `memory/lessons.md`；`memory/index.md` 也位於授權寫入集合時，才同步更新其導覽或檢視資訊。授權修改其他專案檔案不會擴張為 memory 寫入權；未涵蓋的 memory 路徑禁止修改，只在回報中提出候選項目。
- 暫時進度、待辦與未解 issue 留在既有 task、issue tracker 或看板正本；不得建立重複的 `status.md`、`issues.md` 或其他記憶文件，也不得複製未經授權的外部或私人內容。
- 新經驗預設保留在此專案；只有證據顯示可跨專案使用時，才標示為共用記憶候選。
- 不要重複共用規則；引用共用項目，並只記錄本專案的例外或補充。
<!-- END CODEX PROJECT MEMORY GUIDANCE -->
