module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "prettier"],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    "vue/no-unused-vars": "warn",
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
};
