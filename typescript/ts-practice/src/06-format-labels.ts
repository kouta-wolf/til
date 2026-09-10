import type { Item } from "./types";

export function formatLabels(items: Item[]): string[] {
  return items.filter((item) => item.stock > 0)
    .map((item) => `${item.name} (${item.category}) \xA5${item.price.toLocaleString("ja-JP")}`);
}
