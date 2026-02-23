// utils/currency.js
export const USD_TO_INR = 84;

export function toINR(usd) {
  const inr = (usd * USD_TO_INR).toFixed(2);
  return Number(inr).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}