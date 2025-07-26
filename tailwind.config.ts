import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem', // Extra pequeno
        sm: '0.875rem', // Pequeno
        base: '1rem', // Padrão
        lg: '1.125rem', // Grande
        xl: '1.25rem', // Extra grande
        '2xl': '1.5rem', // Muito grande
      },
      boxShadow: {
        neon: '0 0 8px #00ffff, 0 0 16px #00ffff',
        neonHover: '0 0 12px #00ffff, 0 0 24px #00ffff',
        neonBorder: '0 0 5px #00ccff, 0 0 12px #00ccff, 0 0 24px #9ae7ff, 0 0 44px #9ae7ff',
      },
      textShadow: {
        neon: '0 0 5px #d946ef, 0 0 10px #d946ef, 0 0 20px #d946ef',
        lightNeon: '0 0 3px #e499ff, 0 0 12px #d946ef, 0 0 18px #d946ef, 0 0 24px #d946ef',
        fworksGlow: '0 0 3px #9ae7ff, 0 0 12px #00ccff, 0 0 18px #00ccff, 0 0 24px #00ccff',
        techGlow: '0 0 3px #e499ff, 0 0 12px #d946ef, 0 0 18px #d946ef, 0 0 24px #d946ef',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(40px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pulseBlue: {
          '0%, 100%': {
            textShadow: '0 0 5px #9ae7ff, 0 0 15px #00ccff, 0 0 25px #00ccff, 0 0 35px #00ccff',
          },
          '50%': {
            textShadow: '0 0 3px #9ae7ff, 0 0 7px #00ccff, 0 0 15px #00ccff, 0 0 25px #00ccff',
          },
        },
        pulsePurple: {
          '0%, 100%': {
            textShadow: '0 0 5px #e499ff, 0 0 15px #d946ef, 0 0 25px #d946ef, 0 0 35px #d946ef',
          },
          '50%': {
            textShadow: '0 0 3px #e499ff, 0 0 7px #d946ef, 0 0 15px #d946ef, 0 0 25px #d946ef',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        pulseBlue: 'pulseBlue 3s ease-in-out infinite',
        pulsePurple: 'pulsePurple 3s ease-in-out infinite',
      },
      screens: {
        sm: { max: '640px' },
        xs: { max: '480px' },
      },
    },
  },
  plugins: [],
};

export default config;
