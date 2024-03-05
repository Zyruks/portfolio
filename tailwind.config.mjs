/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animationDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      animationDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      fontFamily: {
        merriweather: ['"Merriweather Sans"', 'sans-serif'],
        'merriweather-variable': ['"Merriweather Sans Variable"', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'var(--fluid-xs)',
        'fluid-sm': 'var(--fluid-sm)',
        'fluid-base': 'var(--fluid-base)',
        'fluid-md': 'var(--fluid-md)',
        'fluid-lg': 'var(--fluid-lg)',
        'fluid-xl': 'var(--fluid-xl)',
        'fluid-2xl': 'var(--fluid-2xl)',
      },
    },
  },
  plugins: [require('tailwindcss-scrollbar'), require('tailwindcss-animated'), require('@tailwindcss/typography')],
};
