module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    uni: true,
    getApp: true,
    wx: true,
    getCurrentPages: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "warn",
    "no-empty": "off",
  },
};
