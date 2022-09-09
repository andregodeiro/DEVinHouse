module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "standard",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react", "jsx-a11y"],
  rules: {
    "no-unused-vars": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
