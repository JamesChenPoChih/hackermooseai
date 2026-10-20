# HackerMooseAI 靜態網站

直接雙擊 `index.html` 即可瀏覽；不需要安裝套件、編譯或資料庫。

本機預覽也可執行 `python -m http.server 8017`，開啟 http://localhost:8017 。

## 檔案
- `index.html`：首頁與作品介紹。
- `contact.html`：獨立聯絡頁面、表單與中英文文案。
- `styles.css`：深藍色、紫藍光暈、弧形地平線、桌面與手機排版。
- `script.js`：中英文切換與手機選單。
- `picture/`：使用者提供的公司 Logo、麋鹿品牌圖案，原檔保留。
- `assets/`：本地產品展示圖片，無需外部網路即可顯示。

## 內容設定
產品方案展示 Picking Geek AI 與 US Visa Photo，附使用者提供的品牌圖片、中英文簡介與外部網站連結。獨立聯絡頁已加入姓名、公司、Email、電話、詢問主題與訊息表單。姓名、Email、訊息為必填；表單透過 FormSubmit POST 寄往 hackermooseaitech@gmail.com，保留服務預設驗證，並提供直接寄信連結。正式使用時請替換成實際產品資料、公司資訊與聯絡方式。

## 視覺參考與素材
配色、發光弧線、置中主視覺、雙欄產品圖片及頁尾布局參考 https://dwave.cc/en-US 。程式碼重新製作，使用 HackerMooseAI 品牌；沒有加入參考公司的獎項、客戶背書、商標或追蹤程式。
產品卡片已改用使用者提供的 Picking Geek AI 與 US Visa Photo 品牌圖片；舊展示照片未在首頁使用。

此版本只儲存在指定資料夾，未發布到線上。

## 聯絡表單啟用
- 本機請執行 `python -m http.server 8017`，使用 `http://localhost:8017/contact.html`；直接雙擊檔案僅可預覽，請勿用 file:// 測試寄送。
- 從 HTTP/HTTPS 頁面送出第一次表單後，FormSubmit 會寄出信箱確認信。請到 hackermooseaitech@gmail.com 收信並點擊啟用連結，也請檢查垃圾郵件匣。
- 啟用後請再次送出測試訊息，確認收件；目前只完成設定與本機程式檢查，未送出測試郵件或驗證實際投遞。
- 收件信箱由網站擁有者啟用；參考 https://formsubmit.co/ 。無需在前端保存 Gmail 密碼。

## 使用條款
- `terms.html`：美國 Idaho 州版本，生效日 2026-10-20，英文與繁體中文共 16 節；所有頁尾提供使用條款連結。
- 採用 HackerMooseAI 品牌營運者稱呼；法律姓名或正式法人名稱尚待擁有者提供，不宣稱為已註冊公司。
- 保留強制性消費者保護，不設專屬審判地、強制仲裁或集體訴訟權利拋棄。
- 上線前應由 Idaho 合格律師核對營運者身分、產品條款、實際付款／退款流程與內容。Terms 不取代隱私政策；目前未建立獨立隱私政策，仍須按實際資料處理另行補足。
- 單純頁尾連結不代表使用者已明示接受；需在實際產品註冊或結帳流程安排適當告知與同意。此任務未修改外部產品。
- 參考：FTC COPPA FAQ、FTC ROSCA 訂閱說明、Investor.gov AI Investor Alert、美國國務院 Photo Requirements。
