module.exports = {
  extends: ["eslint-config-airbnb/rules/react"]
    .map(require.resolve)
    .concat([
      "plugin:react-hooks/recommended",
      // base comes after react because it includes prettier, and it needs to be the last.
      "@designbystephen/eslint-config-base",
    ]),

  env: {
    browser: true,
  },

  rules: {
    // Prefer types.
    "react/prop-types": "off",

    // Prefer default arguments.
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",

    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
  },

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
}
