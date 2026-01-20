export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function calculateDiscountedPrice(
  price: number,
  discountPercentage?: number,
): number | null {
  if (!discountPercentage) return null;
  return price * (1 - discountPercentage / 100);
}
