import { describe, it, expect } from "vitest";
import { withTax } from "../src/01-with-tax";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
];

describe("withTax", () => {
  it("名前と税込価格のオブジェクトに変換する", () => {
    expect(withTax(items, 0.1)).toEqual([
      { name: "りんご", taxIncluded: 165 },
      { name: "ノート", taxIncluded: 242 },
    ]);
  });

  it("端数は切り捨てる", () => {
    const bread: Item[] = [{ id: 3, name: "パン", category: "食品", price: 105, stock: 2 }];
    expect(withTax(bread, 0.08)).toEqual([{ name: "パン", taxIncluded: 113 }]);
  });

  it("空配列を渡すと空配列を返す", () => {
    expect(withTax([], 0.1)).toEqual([]);
  });
});
