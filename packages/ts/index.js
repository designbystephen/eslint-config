require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@designbystephen/eslint-config-base"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },
};
