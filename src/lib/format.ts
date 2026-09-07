/** `85` → `85 €` (espace insécable avant le symbole). */
export function formatPrice(value: number): string {
  return `${value} €`;
}
