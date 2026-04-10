/**
 * Redondea a 2 decimales y devuelve texto siempre con dos cifras decimales (ej. 68.8 → "68.80").
 */
export function formatMoney(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return '0.00';
  return (Math.round(n * 100) / 100).toFixed(2);
}

export function formatMoneyDisplay(amount) {
  return `$${formatMoney(amount)}`;
}
