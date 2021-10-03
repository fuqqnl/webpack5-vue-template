module.exports = {
    root: true,
    {{#tsLint}}
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    {{/tsLint}}
    extends: [
        {{#tsLint}}
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        {{/tsLint}}
        {{#if_eq lintConfig "ecomfe"}}
        '@ecomfe/eslint-config/baidu/defect',
        {{/if_eq}}
        {{#if_eq lintConfig "standard"}}
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        {{/if_eq}}
    ],
    plugins: [{{#tsLint}}'@typescript-eslint',{{/tsLint}} {{#if_eq lintConfig "standard"}}'prettier'{{/if_eq}}],
    settings: {},
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
    },
    globals: {
        atom: true,
    },
    rules: {
        quotes: [2, 'single', { 'avoidEscape': true }],
        indent: ['error', 4],
        eqeqeq: ['warn', 'always'],
        {{#tsLint}}
        '@typescript-eslint/ban-types': [
            'error',
            {
              'extendDefaults': true,
              'types': {
                '{}': false
              }
            }
        ],
        {{/tsLint}}
        'prefer-const': [
            'error',
            {destructuring: 'all', ignoreReadBeforeAssign: true},
        ],
        {{#tsLint}}
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {path: 'always', types: 'never', lib: 'never'},
        ],
        {{/tsLint}}
        'spaced-comment': ['error', 'always'],
        {{#if_eq lintConfig "ecomfe"}}
        'no-console': 'off',
        'no-constant-condition': 'off',
        'no-func-assign': 'error',
        'no-negated-in-lhs': 'error',
        'no-sparse-arrays': 'error',
        'use-isnan': 'error',
        'no-extend-native': 'error',
        'no-redeclare': 'error',
        'no-with': 'error',
        'wrap-iife': ['error', 'any'],
        'no-delete-var': 'off',
        'no-dupe-args': 'error',
        'no-array-constructor': 'error',
        'no-multi-spaces': 'error',
        'no-var': 'off',
        'no-unused-vars': 'off'
        {{/if_eq}}
    },
};
