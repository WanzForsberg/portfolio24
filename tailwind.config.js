/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'neg-05': '-0.5rem',
        'pos-03': '0.3rem',
        'neg-03': '-0.3rem',
        'pos-04': '0.4rem',
        'neg-02': '-0.2rem',
        'pos-05': '0.5rem',
      },
    },
  },
  plugins: [],
};
