# taigi_typing

台語文拍字練習網頁，會使揀隨機的教典例句抑是文章做練習，嘛會當家己設定文本。若是漢羅對應的文本閣通轉換做漢羅互相標註的形式。

- 教典例句資料遵照 創用 CC 姓名標示-禁止改作 3.0 臺灣 授權條款使用
- 文章練習文稿版權屬佇原作者，干焦通佇這个網頁內底使用
- 網頁程式本身以 CC0 開源授權
- 台羅／白話字轉換使用 [@kemdict/kesi](https://www.npmjs.com/package/@kemdict/kesi)（意傳科技 KeSi 的 TypeScript 轉寫，由 Kisaragi Hiu 提供）

若欲重打包 kesi 瀏覽器版本：

```bash
npm install
npm run build:kesi
```

會先套用 `scripts/patch-kesi.mjs`（修正多字元標點正規表達無正確的問題），閣再產生 `kesi.bundle.js` 予 `index.html` 載入。
