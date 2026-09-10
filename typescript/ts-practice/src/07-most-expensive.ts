import type { Item } from "./types";

export function mostExpensive(items: Item[]): Item | null {
  return items.reduce<Item | null>((acc, item) => (acc === null || acc.price < item.price) ? item : acc, null);
}
