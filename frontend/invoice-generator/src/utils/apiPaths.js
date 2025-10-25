// Use Vite environment variable for backend URL
export const BASE_URL = import.meta.env.VITE_API_URL;

// API endpoints
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Signup
    LOGIN: "/api/auth/login",       // Authenticate user & return JWT token
    GET_PROFILE: "/api/auth/me",    // Get logged-in user details
    UPDATE_PROFILE: "/api/auth/me", // Update profile details (PUT)
  },

  INVOICE: {
    CREATE: "/api/invoices/",
    GET_ALL_INVOICES: "/api/invoices/",
    GET_INVOICE_BY_ID: (id) => `/api/invoices/${id}`,
    UPDATE_INVOICE: (id) => `/api/invoices/${id}`,
    DELETE_INVOICE: (id) => `/api/invoices/${id}`,
  },

  AI: {
    PARSE_INVOICE_TEXT: "/api/ai/parse-text",
    GENERATE_REMINDER: "/api/ai/generate-reminder",
    GET_DASHBOARD_SUMMARY: "/api/ai/dashboard-summary",
  },
};
