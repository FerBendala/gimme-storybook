module.exports = {
    env: {
        'browser': true,
        'es2021': true,
        'node': true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:mdx/recommended',
        'plugin:react/recommended',
        'plugin:storybook/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'ignoredNodes': [
                    'ConditionalExpresion'
                ]
            }
        ],
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'eqeqeq': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'no-console': 0,
        'react/react-in-jsx-scope': 'off',
        'global-require': 'off'
    },
    settings: {
        'mdx/code-blocks': true,
        'react': {
            'version': 'detect'
        }
    },
    globals: {
        'document': true,
        'window': true,
    },
}