import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'script',
            globals: {
                ...globals.browser,
                ...globals.node,
                PortfolioApp: 'readonly'
            }
        },
        rules: {
            'indent': ['error', 4],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-console': 'warn',
            'no-unused-vars': 'warn',
            'prefer-const': 'error',
            'no-var': 'error',
            'arrow-spacing': 'error',
            'comma-dangle': ['error', 'never'],
            'eol-last': 'error',
            'no-multiple-empty-lines': ['error', { 'max': 2 }],
            'object-curly-spacing': ['error', 'always'],
            'space-before-blocks': 'error',
            'keyword-spacing': 'error'
        }
    }
];
