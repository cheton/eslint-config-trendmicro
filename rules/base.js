module.exports = {
    rules: {
        'arrow-body-style': 0,
        'arrow-parens': [0, 'as-needed'],
        'block-spacing': 2,
        'brace-style': [2, '1tbs'],
        'callback-return': 0,
        'camelcase': [2, { 'properties': 'never' }],
        'capitalized-comments': 0,
        'class-methods-use-this': 0,
        'comma-spacing': 2,
        'comma-style': [2, 'last'],
        'comma-dangle': [2, 'never'],
        'consistent-return': 2,
        'curly': [2, 'all'],
        'default-case': 2,
        'dot-notation': [2, { 'allowKeywords': true }],
        'eol-last': 2,
        'eqeqeq': 2,
        'func-names': 0,
        'global-require': 0,
        'import/extensions': [2, { 'js': 'never', 'json': 'always' }],
        'import/newline-after-import': 2,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 2,
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        'indent': [2, 4],
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'max-len': [1, 160, 2, { 'ignoreComments': true }],
        'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
        'new-parens': 2,
        'no-alert': 2,
        'no-array-constructor': 2,
        'no-caller': 2,
        'no-cond-assign': [2, 'except-parens'],
        'no-const-assign': 2,
        'no-console': [1, { 'allow': ['assert', 'warn', 'error'] }],
        'no-continue': 2,
        'no-else-return': 0,
        'no-extra-boolean-cast': 0,
        'no-lone-blocks': 0,
        'no-mixed-operators': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-prototype-builtins': 2,
        'no-restricted-properties': 0,
        'no-restricted-syntax': 0,
        'no-return-await': 2,
        'no-shadow': 0,
        'no-tabs': 2,
        'no-underscore-dangle': 0,
        'no-unused-expressions': [2, {
            'allowShortCircuit': true,
            'allowTernary': true
        }],
        'no-unused-vars': [2, {
            'vars': 'local',
            'args': 'none'
        }],
        'no-use-before-define': 0,
        'no-useless-escape': 0,
        'no-useless-return': 0,
        'no-var': 1,
        'object-shorthand': 0,
        'one-var': 0,
        'one-var-declaration-per-line': 0,
        'prefer-const': 0,
        'prefer-spread': 0,
        'prefer-template': 0,
        'quote-props': [0, 'as-needed'],
        'quotes': [2, 'single'],
        'require-await': 2,
        'space-before-function-paren': 0,
        'space-unary-ops': 2,
        'spaced-comment': 0,
        'vars-on-top': 0
    }
};
