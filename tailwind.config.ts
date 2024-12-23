import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          green: 'var(--terminal-green)',
          orange: 'var(--terminal-orange)',
          background: 'var(--terminal-background)',
        }
      },
    },
  },
  plugins: [],
};

export default config;