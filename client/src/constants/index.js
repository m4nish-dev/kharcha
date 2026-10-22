/**
 * Application-wide constants.
 * Centralises branding, localization, and configuration values.
 */

export const APP_NAME = 'Kharcha';
export const APP_TAGLINE = 'Know Your Kharcha';

export const CURRENCY = {
  code: 'INR',
  symbol: '₹',
  locale: 'en-IN',
};

/**
 * Format a number as Indian Rupees.
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat(CURRENCY.locale, {
    style: 'currency',
    currency: CURRENCY.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
