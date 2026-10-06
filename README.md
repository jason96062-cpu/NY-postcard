# New York Postcard - GitHub Pages 部署專案

這是一個互動式單頁網站，核心概念為「寄給朋友的紐約回憶錄數位明信片」。
純前端設計（HTML + CSS + JavaScript），不需要後端、資料庫，可直接部署至 GitHub Pages 免費發布。

## 📁 檔案結構說明

- `index.html`: 負責網站的「骨架」與排版結構。
- `style.css`: 負責網站的「外觀」、顏色、字體、排版樣式。
- `script.js`: 負責「動畫」與「讀取資料」的邏輯。
- `friends.js`: **這是你唯一需要修改的檔案！** 所有朋友的姓名、照片、文字內容都寫在這裡。
- `images/`: 請將你的照片（如 amy-01.jpg）放到這個資料夾中。

## 💡 如何增加一個新朋友？
1. 打開 `friends.js`
2. 複製 `amy` 的區塊，貼到下面，並把 `amy` 改成新朋友的名字（例如 `kevin`）。
3. 修改裡面的 `name`, `text`, `image` 等內容。
4. 使用網址 `https://你的帳號.github.io/你的專案名稱/?friend=kevin` 就可以看到他的專屬頁面了！
