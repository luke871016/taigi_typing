# taigi_typing

台語文拍字練習網頁，會使揀隨機的教典例句抑是文章做練習，嘛會當家己設定文本。若是漢羅對應的文本閣通轉換做漢羅互相標註的形式。

- 教典例句資料遵照 創用 CC 姓名標示-禁止改作 3.0 臺灣 授權條款使用
- 文章練習文稿版權屬佇原作者，干焦通佇這个網頁內底使用
- 網頁程式本身以 CC0 開源授權
- 台羅／白話字轉換使用 [@kemdict/kesi](https://www.npmjs.com/package/@kemdict/kesi)（意傳科技 KeSi 的 TypeScript 轉寫，由 Kisaragi Hiu 提供）

若欲重包 kesi 瀏覽器版本：

```bash
npm install
npm run build:kesi
```

會先套用 `scripts/patch-kesi.mjs`（修正多字元標點正規表達無正確的問題），閣再產生 `kesi.bundle.js` 予 `index.html` 載入。

練習分頁的題庫是辭典「主詞目」，每一詞閣對 `hanji_tailo_word_freq.csv` 的歌詞詞頻。更新辭典了後，佇 `publish/taigi_typing` 跑 `npm run build:practice`，會重新產生 `practice-data.js`。每一列練習會優先抽有詞頻、而且愈常用的詞；無出現佇詞頻表的詞目，干焦佇該个鍵無較捷的詞通練的時陣才會用著。練習是像 keybr 按鍵做單位：網頁會照所揀的羅馬字（台羅／白話字）佮輸入法（數字調／Telex）共詞轉做理論輸入碼（白話字 ⁿ 拍 nn、o͘ 拍 oo），統計按鍵頻率，照頻率一鍵一鍵解鎖。
