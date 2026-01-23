/**
 * Design token values for Verichains brand colors
 * Used for programmatic access to color values
 */
export const colors = {
  cyan: {
    DEFAULT: '#00D4FF',
    hover: '#00B8E6',
    foreground: '#000000',
  },
  orange: {
    DEFAULT: '#FF6B35',
    hover: '#E65A2E',
    foreground: '#FFFFFF',
  },
  background: {
    DEFAULT: '#0A0E27',
    dark: '#000000',
    elevated: '#1A1F3A',
  },
  foreground: {
    DEFAULT: '#FFFFFF',
    muted: '#E5E5E5',
    subtle: '#9CA3AF',
  },
  border: {
    DEFAULT: '#2D3748',
    focus: '#00D4FF',
  },
  input: {
    bg: '#1A1F3A',
    border: '#2D3748',
    placeholder: '#9CA3AF',
  },
  destructive: '#EF4444',
  success: '#10B981',
} as const;
