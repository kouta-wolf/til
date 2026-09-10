import { describe, it, expect } from "vitest";
import { totalPrice } from "../src/05-total-price";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
  { id: 3, name: "消しゴム", category: "文具", price: 90, stock: 3 },
];

describe("totalPrice", () => {
  it("在庫数を掛けた合計金額を返す", () => {
    expect(totalPrice(items)).toBe(150 * 5 + 220 * 0 + 90 * 3);
  });

  it("空配列なら0", () => {
    expect(totalPrice([])).toBe(0);
  });
});
