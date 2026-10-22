/**
 * Lightweight API client for communicating with the Kharcha Express backend.
 * Uses native fetch API with Vite proxy support or explicit VITE_API_URL.
 */

// If VITE_API_URL is configured, use it directly (e.g. 'http://localhost:5001/api').
// Otherwise default to '/api' which Vite dev server proxies to http://localhost:5001.
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Make an API request to the Kharcha Express backend.
 * @param {string} endpoint - Path relative to API_BASE_URL (e.g. '/health')
 * @param {RequestInit} [options] - Fetch options (method, headers, body, etc.)
 * @returns {Promise<any>}
 */
export async function apiClient(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const res = await fetch(url, { ...options, headers });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData.error || `Request failed with status ${res.status}`
    );
  }

  return res.json();
}

/**
 * Convenience helper to verify backend connectivity.
 */
export async function checkApiHealth() {
  return apiClient('/health');
}

export default apiClient;
