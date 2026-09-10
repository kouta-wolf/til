import type { Item } from "./types";

export function findById(items: Item[], id: number): Item | undefined {
  return items.find((item) => item.id === id)
}

