# link-preview-details

`link-preview-details` 是一個使用 Puppeteer 的 Node.js 模塊，用於生成網頁鏈接預覽，包括標題、描述和圖片。

## 安裝

使用 npm 安裝 `link-preview-details`：

```bash
npm install link-preview-details
```

## 使用方法

導入 `link-preview-details`，並使用它來獲取網頁的預覽信息：

```javascript
const getLinkPreview = require('link-preview-details');

// 以默认模式运行
getLinkPreview('https://example.com').then(preview => {
    console.log(preview);
});

// 以无沙箱模式运行
getLinkPreview('https://example.com', true).then(preview => {
    console.log(preview);
});

```

## API

`getLinkPreview(url)`

- `url` (string): 您想要生成預覽的網頁 URL。
- useNoSandbox (boolean): 可選，設置為 true 以在無沙箱模式下運行。
- 返回: Promise，解析為一個包含標題、描述和圖片 URL 的對象。
