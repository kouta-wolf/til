import type { Item } from "./types";

export function sortByPriceAsc(items: Item[]): Item[] {
  const items2 = items.slice();
  return items2.sort((a, b) => a.price - b.price);
}
