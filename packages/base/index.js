module.exports = {
  extends: [
    "eslint-config-airbnb-base/rules/best-practices",
    "eslint-config-airbnb-base/rules/errors",
    "eslint-config-airbnb-base/rules/node",
    "eslint-config-airbnb-base/rules/style",
    "eslint-config-airbnb-base/rules/variables",
    "eslint-config-airbnb-base/rules/es6",
  ]
    .map(require.resolve)
    .concat([
      // This disables all stylistic rules from the above.
      "prettier",
    ]),

  plugins: ["prettier", "import", "@typescript-eslint"],

  parser: "@typescript-eslint/parser",

  settings: {
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },

  rules: {
    "no-underscore-dangle": "off",
  }
}
