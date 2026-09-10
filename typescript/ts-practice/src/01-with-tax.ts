import type { Item } from "./types";

export function withTax(items: Item[], rate: number): { name: string; taxIncluded: number }[] {
  return items.map((item) => ({ name: item.name, taxIncluded: Math.floor(item.price * (1 + rate)) }));
}
