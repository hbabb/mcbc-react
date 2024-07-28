// stylelint.config.cjs
const stylelintConfigStandard = require('stylelint-config-standard');
const stylelintFormatterPretty = require('stylelint-formatter-pretty');


module.exports = {
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-formatter-pretty'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
            },
        ],
        'declaration-block-trailing-semicolon': 'always',
        'block-no-empty': true,
        'unit-whitelist': ['em', 'rem', '%', 's'],
        'indentation': 2,
        'string-quotes': 'single',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'max-line-length': 80,
    },
    defaultSeverity: 'warning',
    ignoreFiles: ['node_modules/**/*', 'dist/**/*.css'],
    formatter: 'stylelint-formatter-pretty',
};