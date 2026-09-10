import { describe, it, expect } from "vitest";
import { mostExpensive } from "../src/07-most-expensive";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
];

describe("mostExpensive", () => {
  it("最も高いItemを返す", () => {
    expect(mostExpensive(items)?.id).toBe(2);
  });

  it("同額なら先に現れたほうを返す", () => {
    const tie: Item[] = [
      { id: 1, name: "A", category: "x", price: 100, stock: 1 },
      { id: 2, name: "B", category: "x", price: 100, stock: 1 },
    ];
    expect(mostExpensive(tie)?.id).toBe(1);
  });

  it("空配列なら null を返す", () => {
    expect(mostExpensive([])).toBeNull();
  });
});
