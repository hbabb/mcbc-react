/* mcbc-react\postcss.config.js */
export default {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: {
            '--small-viewport': '(max-width: 600px)',
            '--medium-viewport': '(min-width: 601px) and (max-width: 1024px)',
            '--large-viewport': '(min-width: 1025px)',
          },
        },
      ],
    },
    'postcss-flexbugs-fixes': {},
    cssnano: { preset: 'default' },
  },
}
