import { describe, it, expect } from "vitest";
import { sortByPriceAsc } from "../src/04-sort-by-price-asc";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
];

describe("sortByPriceAsc", () => {
  it("価格の昇順に並べる", () => {
    expect(sortByPriceAsc(items).map((i) => i.id)).toEqual([3, 1, 2]);
  });

  it("元の配列を並べ替えない", () => {
    sortByPriceAsc(items);
    expect(items.map((i) => i.id)).toEqual([1, 2, 3]);
  });

  it("空配列なら空配列", () => {
    expect(sortByPriceAsc([])).toEqual([]);
  });
});
