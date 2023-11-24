# link-preview-details

`link-preview-details` 是一個簡單好上手的網頁鏈接預覽工具，使用Puppeteer的Node.js模塊，傳入網址會回傳網頁鏈接預覽，包括標題、描述和圖片。

`link-preview-details` is a user-friendly web link preview tool, a Node.js module using Puppeteer. It returns a web link preview, including title, description, and image, when a URL is provided.

## 安裝(Install)

使用 npm 安裝 `link-preview-details`：

Install `link-preview-details` using npm:

```bash
npm install link-preview-details
```

## 使用方法(Usage)

導入 `link-preview-details`，並使用它來獲取網頁的預覽信息：

Import link-preview-details and use it to get a preview of the web page:

```javascript
const getLinkPreview = require('link-preview-details');

// 以默認模式運行
// Run in default mode
getLinkPreview('https://example.com').then(preview => {
    console.log(preview);
});

// 以無沙盒模式運行，大部分是在使用遠端電腦linux時，跳出fail to launch browser、或--no-sandbox錯誤時使用
// Run in no-sandbox mode, mostly used when encountering fail to launch browser or --no-sandbox error on remote Linux computers
getLinkPreview('https://example.com', true).then(preview => {
    console.log(preview);
});

```

## API

`getLinkPreview(url)`

- `url` (string): 您想要生成預覽的網頁 URL(The web page URL you want to generate a preview for).
- `useNoSandbox` (boolean): 可選，設置為 true 以在無沙箱模式下運行(Optional, set to true to run in no-sandbox mode)。
- 返回: Promise，解析為一個包含標題、描述和圖片 URL 的對象(Returns: Promise, resolves to an object containing the title, description, and image URL)。