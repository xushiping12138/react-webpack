module.exports = {
  root: true,
  defaultServerity: 'error',
  extends: [
      'stylelint-config-standard',
      'stylelint-config-recess-order',
      'stylelint-config-prettier',
  ],
  plugins: [
      'stylelint-order',
      'stylelint-scss'
  ],
  rules: {
      indentation: 2,
      "declaration-block-no-duplicate-properties": true,
      'declaration-colon-space-before': 'never',
      'declaration-colon-space-after': 'always-single-line',
      'at-rule-no-unknown': [true, {
          ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'return', 'for', 'use'],
      }],
      "no-empty-source": null,
      'rule-empty-line-before': ['always'],
      'max-empty-lines': 1
  },
  overrides: [
      {
        files: ["**/*.{css,scss}"],
        customSyntax: "postcss-scss"
      }
  ],
}