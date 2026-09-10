import type { Item } from "./types";

export function sortByCategoryThenPriceDesc(items: Item[]): Item[] {
  return [...items].sort((a, b) => {
    if (a.category !== b.category) {
      return a.category < b.category ? -1 : 1;
    }
    return b.price - a.price;
  })
}
