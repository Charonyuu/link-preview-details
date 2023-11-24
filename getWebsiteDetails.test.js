import getWebsiteDetails from "./index";

describe("getWebsiteDetails", () => {
  it("should return webpage details for a given URL", async () => {
    // 使用一個已知的 URL 進行測試
    const url = "https://www.patterns.dev/react/hoc-pattern";
    const result = await getWebsiteDetails(url);

    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("image");
  });
});
