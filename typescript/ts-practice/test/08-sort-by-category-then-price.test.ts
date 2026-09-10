import { describe, it, expect } from "vitest";
import { sortByCategoryThenPriceDesc } from "../src/08-sort-by-category-then-price";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
  { id: 4, name: "電卓", category: "家電", price: 12800, stock: 1 },
  { id: 5, name: "パン", category: "食品", price: 240, stock: 2 },
];

describe("sortByCategoryThenPriceDesc", () => {
  it("カテゴリ名の昇順、同カテゴリ内は価格の降順で並べる", () => {
    // カテゴリのコードポイント順: 家電 < 文具 < 食品
    expect(sortByCategoryThenPriceDesc(items).map((i) => i.id)).toEqual([4, 2, 3, 5, 1]);
  });

  it("元の配列を並べ替えない", () => {
    sortByCategoryThenPriceDesc(items);
    expect(items.map((i) => i.id)).toEqual([1, 2, 3, 4, 5]);
  });
});
