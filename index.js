const puppeteer = require("puppeteer");

async function getWebsiteDetails(url, useNoSandbox = false) {
  const launchOptions = {
    headless: "new",
  };
  // 如果指定了 useNoSandbox，添加无沙箱模式参数
  if (useNoSandbox) {
    launchOptions.args = ["--no-sandbox", "--disable-setuid-sandbox"];
  }
  const browser = await puppeteer.launch(launchOptions);

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
  );

  await page.goto(url);
  // 使用 Puppeteer 的 evaluate 方法在頁面上下文中運行 JavaScript
  const result = await page.evaluate(() => {
    // 函數來獲取不同類型的標題
    function getTitle() {
      const ogTitle = document.querySelector(
        'meta[property="og:title"]'
      )?.content;
      const twitterTitle = document.querySelector(
        'meta[name="twitter:title"]'
      )?.content;
      const schemaTitle = document.querySelector(
        'meta[itemprop="name"]'
      )?.content;
      const titleTag = document.title;
      return ogTitle || twitterTitle || schemaTitle || titleTag || "";
    }

    // 函數來獲取不同類型的圖片
    function getImage() {
      const ogImage = document.querySelector(
        'meta[property="og:image"]'
      )?.content;
      const twitterImg = document.querySelector(
        'meta[name="twitter:image"]'
      )?.content;
      const schemaImg = document.querySelector(
        'meta[itemprop="image"]'
      )?.content;
      const favicon =
        document.querySelector('link[rel="icon"]')?.href ||
        document.querySelector('link[rel="shortcut icon"]')?.href;
      const firstImage = document.querySelector("img")?.src;
      return ogImage || twitterImg || schemaImg || favicon || firstImage || "";
    }

    // 函數來獲取不同類型的描述
    function getDescription() {
      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      )?.content;
      const twitterDescription = document.querySelector(
        'meta[name="twitter:description"]'
      )?.content;
      const schemaDescription = document.querySelector(
        'meta[itemprop="description"]'
      )?.content;
      const nameDescription = document.querySelector(
        'meta[name="description"]'
      )?.content;
      const propertyDescription = document.querySelector(
        'meta[property="description"]'
      )?.content;
      const longEnoughParagraph = Array.from(document.querySelectorAll("p"))
        .find((p) => p.innerText.trim().length > 20)
        ?.innerText.trim();

      return (
        ogDescription ||
        twitterDescription ||
        schemaDescription ||
        nameDescription ||
        propertyDescription ||
        longEnoughParagraph ||
        ""
      );
    }

    return {
      image: getImage(),
      title: getTitle(),
      description: getDescription(),
    };
  });

  await browser.close();

  return result;
}

module.exports = getWebsiteDetails;
