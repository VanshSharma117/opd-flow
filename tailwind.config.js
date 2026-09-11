/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        opd: {
          navy: {
            950: '#070D18',
            900: '#0B1528',
            800: '#112240',
            700: '#1D3557',
            600: '#2A4A7F',
            500: '#3D64A2',
          },
          teal: {
            900: '#083344',
            800: '#0e4e68',
            700: '#086e7d',
            600: '#0d9488',
            500: '#14b8a6',
            400: '#2dd4bf',
            100: '#ccfbf1',
            50: '#f0fdfa',
          },
          mint: {
            500: '#10b981',
            200: '#a7f3d0',
            100: '#d1fae5',
            50: '#ecfdf5',
          },
          sand: {
            900: '#45382f',
            700: '#78685b',
            400: '#c4b5a5',
            200: '#e7dfd5',
            100: '#f3eee8',
            50: '#faf7f3',
          },
          offwhite: '#F8FAFC',
          cream: '#FCFAF7',
          surface: '#FFFFFF',
          border: '#E2E8F0',
          amber: {
            500: '#f59e0b',
            100: '#fef3c7',
            50: '#fffbeb',
          },
          crimson: {
            500: '#ef4444',
            100: '#fee2e2',
            50: '#fef2f2',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(11, 21, 40, 0.06), 0 2px 6px -1px rgba(11, 21, 40, 0.04)',
        'float': '0 20px 40px -8px rgba(11, 21, 40, 0.12), 0 8px 16px -4px rgba(11, 21, 40, 0.06)',
        'glow-teal': '0 0 35px -5px rgba(20, 184, 166, 0.25)',
        'glow-navy': '0 0 45px -10px rgba(11, 21, 40, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beacon': 'beacon 2s infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.94, transform: 'scale(0.995)' },
        },
        beacon: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 14px rgba(16, 185, 129, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
