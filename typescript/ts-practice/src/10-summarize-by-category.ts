import type { Item } from "./types";

export function summarizeByCategory(items: Item[]): { category: string; count: number; total: number }[] {
  const summary = items.reduce<Record<string, { count: number; total: number }>>((acc, item) => {
    if (acc[item.category] === undefined) {
      acc[item.category] = { count: 0, total: 0 };
    }
    acc[item.category].count += 1;
    acc[item.category].total += item.price * item.stock;
    return acc;
  }, {});

  return Object.keys(summary)
    .sort((a, b) => (a < b ? -1 : 1))
    .map((category) => ({
      category,
      count: summary[category].count,
      total: summary[category].total,
    }));
}
