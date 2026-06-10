export const colors = {
  primary: {
    50: "#f5f3ff",
    500: "#8B5CF6",
    600: "#7C3AED",
    700: "#6D28D9",
  },
  secondary: {
    500: "#FBBF24",
    600: "#F59E0B",
  },
  background: "#FFFFFF",
  surface: "#F9FAFB",
  text: {
    primary: "#1F2937",
    secondary: "#6B7280",
  },
  success: "#10B981",
  error: "#EF4444",
} as const

export type ColorScheme = typeof colors