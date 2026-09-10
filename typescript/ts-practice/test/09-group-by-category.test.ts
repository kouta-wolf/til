import { describe, it, expect } from "vitest";
import { groupByCategory } from "../src/09-group-by-category";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
  { id: 4, name: "パン", category: "食品", price: 240, stock: 2 },
];

describe("groupByCategory", () => {
  it("カテゴリをキーにしたオブジェクトにまとめる", () => {
    const grouped = groupByCategory(items);
    expect(Object.keys(grouped).sort()).toEqual(["文具", "食品"]);
    expect(grouped["食品"].map((i) => i.id)).toEqual([1, 4]);
    expect(grouped["文具"].map((i) => i.id)).toEqual([2, 3]);
  });

  it("グループ内は元の並び順を保つ", () => {
    const reversed = [...items].reverse();
    expect(groupByCategory(reversed)["食品"].map((i) => i.id)).toEqual([4, 1]);
  });

  it("空配列なら空オブジェクト", () => {
    expect(groupByCategory([])).toEqual({});
  });
});
