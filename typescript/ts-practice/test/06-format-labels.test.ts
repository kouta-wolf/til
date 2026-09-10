import { describe, it, expect } from "vitest";
import { formatLabels } from "../src/06-format-labels";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
];

describe("formatLabels", () => {
  it("在庫ありのものだけを表示用の文字列にする", () => {
    expect(formatLabels(items)).toEqual([
      "りんご (食品) ¥150",
      "消しゴム (文具) ¥90",
    ]);
  });

  it("3桁ごとにカンマを入れる", () => {
    const pricey: Item[] = [{ id: 4, name: "電卓", category: "家電", price: 12800, stock: 1 }];
    expect(formatLabels(pricey)).toEqual(["電卓 (家電) ¥12,800"]);
  });

  it("空配列なら空配列", () => {
    expect(formatLabels([])).toEqual([]);
  });
});
