import type { Item } from "./types";

export function inStock(items: Item[]): Item[] {
  return items.filter((item) => item.stock > 0);
}
