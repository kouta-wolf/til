import { describe, it, expect } from "vitest";
import { summarizeByCategory } from "../src/10-summarize-by-category";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
  { id: 4, name: "パン", category: "食品", price: 240, stock: 2 },
];

describe("summarizeByCategory", () => {
  it("カテゴリごとの件数と在庫金額を、カテゴリ名の昇順で返す", () => {
    expect(summarizeByCategory(items)).toEqual([
      { category: "文具", count: 2, total: 220 * 0 + 90 * 3 },
      { category: "食品", count: 2, total: 150 * 5 + 240 * 2 },
    ]);
  });

  it("空配列なら空配列", () => {
    expect(summarizeByCategory([])).toEqual([]);
  });
});
