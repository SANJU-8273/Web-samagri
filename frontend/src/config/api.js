/**
 * API Configuration with fallback for development
 * This provides a fallback URL when NEXT_PUBLIC_API_URL is not set
 */

const API_CONFIG = {
  // Use environment variable or fallback to local server
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  
  // Endpoint helpers
  endpoints: {
    products: "/api/products",
    users: "/api/users",
    orders: "/api/orders",
    payment: "/api/payment",
    syncUser: "/api/sync-user",
    shops: "/api/shops",
    upload: "/api/upload",
  },
};

// Helper function to get API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseUrl}${endpoint}`;
};

// Export for components to use
export default API_CONFIG;
