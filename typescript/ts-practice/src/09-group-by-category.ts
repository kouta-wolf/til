import type { Item } from "./types";

export function groupByCategory(items: Item[]): Record<string, Item[]> {
  return items.reduce<Record<string, Item[]>>((acc, item) => {
    if (acc[item.category] === undefined) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc
  }, {});
}
