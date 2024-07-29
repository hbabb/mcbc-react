/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'custom-blue': '#262262',
        'custom-black': '#242526',
        'custom-white': '#ffffff',
      },
      fontFamily: {
        allura: ['Allura', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xxs: '.60rem',
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      width: {
        fit: 'fit-content',
      },
      height: {
        fit: 'fit-content',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s linear infinite',
        'pulse-slow': 'pulse 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-gradients'),
  ],
}
