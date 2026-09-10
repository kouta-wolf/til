import type { Item } from "./types";

export function totalPrice(items: Item[]): number {
  return items.reduce((acc, item) => acc + item.price * item.stock, 0);
}
