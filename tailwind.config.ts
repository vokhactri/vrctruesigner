import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verichains brand colors
        'vrc-cyan': {
          DEFAULT: '#00D4FF',
          hover: '#00B8E6',
          foreground: '#000000',
        },
        'vrc-orange': {
          DEFAULT: '#FF6B35',
          hover: '#E65A2E',
          foreground: '#FFFFFF',
        },
        'vrc-bg': {
          DEFAULT: '#0A0E27',
          dark: '#000000',
          elevated: '#1A1F3A',
        },
        'vrc-foreground': {
          DEFAULT: '#FFFFFF',
          muted: '#E5E5E5',
          subtle: '#9CA3AF',
        },
        'vrc-border': {
          DEFAULT: '#2D3748',
          focus: '#00D4FF',
        },
        'vrc-input': {
          bg: '#1A1F3A',
          border: '#2D3748',
          placeholder: '#9CA3AF',
        },
        'deep-dark': {
          DEFAULT: '#0A0A0A',
          60: 'rgba(10, 10, 10, 0.6)',
          70: 'rgba(10, 10, 10, 0.7)',
        },
        destructive: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        small: '0.25rem',
        large: '1rem',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 212, 255, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
