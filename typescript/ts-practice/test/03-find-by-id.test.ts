import { describe, it, expect } from "vitest";
import { findById } from "../src/03-find-by-id";
import type { Item } from "../src/types";

const items: Item[] = [
  { id: 1, name: "りんご", category: "食品", price: 150, stock: 5 },
  { id: 2, name: "ノート", category: "文具", price: 220, stock: 0 },
];

describe("findById", () => {
  it("該当するItemを返す", () => {
    expect(findById(items, 2)?.name).toBe("ノート");
  });

  it("見つからなければ undefined を返す", () => {
    expect(findById(items, 99)).toBeUndefined();
  });

  it("空配列でも落ちない", () => {
    expect(findById([], 1)).toBeUndefined();
  });
});
