# node-link-preview

`node-link-preview` 是一個使用 Puppeteer 的 Node.js 模塊，用於生成網頁鏈接預覽，包括標題、描述和圖片。

## 安裝

使用 npm 安裝 `node-link-preview`：

```bash
npm install node-link-preview
```

## 使用方法

導入 `node-link-preview`，並使用它來獲取網頁的預覽信息：

```javascript
const getLinkPreview = require('node-link-preview');

getLinkPreview('https://example.com').then(preview ={
    console.log(preview);
});
```

## API

`getLinkPreview(url)`

- `url` (string): 您想要生成預覽的網頁 URL。
- 返回: Promise，解析為一個包含標題、描述和圖片 URL 的對象。

## 作者

charonyu

## 許可證

ISC
