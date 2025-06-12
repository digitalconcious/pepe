export const theme = {
  colors: {
    // Primary Colors
    forestGreen: '#2E7D32', // Trust & Stability
    leafGreen: '#4CAF50',   // Growth & Innovation
    sageGreen: '#81C784',   // Security & Reliability

    // Secondary Colors
    earthBrown: '#795548',  // Professional & Grounded
    warmBrown: '#8D6E63',   // Approachable & Secure
    lightBrown: '#BCAAA4',  // Modern & Clean

    // Accent Colors
    cream: '#F5F5DC',       // Clarity & Efficiency
    lightSage: '#E8F5E9',   // Success & Progress
    darkBrown: '#3E2723',   // Authority & Trust

    // UI Colors
    background: '#F5F5DC',
    surface: '#FFFFFF',
    text: {
      primary: '#3E2723',
      secondary: '#795548',
      disabled: '#BCAAA4',
    },
    border: '#E8F5E9',
    error: '#D32F2F',
    success: '#2E7D32',
    warning: '#F57C00',
    info: '#1976D2',

    // Enterprise-specific colors
    security: {
      primary: '#2E7D32',
      secondary: '#1B5E20',
      accent: '#81C784',
    },
    compliance: {
      primary: '#795548',
      secondary: '#5D4037',
      accent: '#BCAAA4',
    },
    workflow: {
      pending: '#F57C00',
      approved: '#2E7D32',
      rejected: '#D32F2F',
      inProgress: '#1976D2',
    },
  },
  typography: {
    fontFamily: {
      primary: '"Poppins", sans-serif',
      secondary: '"Roboto", sans-serif',
      monospace: '"Roboto Mono", monospace', // For code and technical content
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
  // Enterprise-specific configurations
  security: {
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    maxLoginAttempts: 5,
    passwordMinLength: 12,
    requireMFA: true,
  },
  compliance: {
    auditLogRetention: 365 * 24 * 60 * 60 * 1000, // 1 year
    documentVersioning: true,
    encryptionLevel: 'AES-256',
  },
  workflow: {
    maxApprovalLevels: 5,
    defaultTimeout: 7 * 24 * 60 * 60 * 1000, // 7 days
    reminderInterval: 24 * 60 * 60 * 1000, // 24 hours
  },
} as const;

export type Theme = typeof theme; 