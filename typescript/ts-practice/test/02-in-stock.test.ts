import { describe, it, expect } from "vitest";
import { inStock } from "../src/02-in-stock";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
];

describe("inStock", () => {
  it("在庫が1以上のものだけを返す", () => {
    expect(inStock(items).map((i) => i.id)).toEqual([1, 3]);
  });

  it("該当なしなら空配列", () => {
    expect(inStock([{ id: 9, name: "傘", category: "雑貨", price: 500, stock: 0 }])).toEqual([]);
  });

  it("元の配列を変更しない", () => {
    const original = [...items];
    inStock(items);
    expect(items).toEqual(original);
  });
});
