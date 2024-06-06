/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Noto Sans Mono'],
      },
    },
  },
  plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
};
