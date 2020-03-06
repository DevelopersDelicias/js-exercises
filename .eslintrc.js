module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: false }],
    "comma-dangle": ["error", "always-multiline"],
    "max-len": [
      "error",
      {
        code: 80,
        ignoreUrls: true,
        tabWidth: 2
      }
    ],
    semi: ["error", "never"]
  }
};
