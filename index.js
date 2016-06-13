module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6
  },
  "env": {
    "node": true
  },
  "plugins": [
    "flowtype"
  ],
  "extends": "standard",
  "rules": {
    "max-len": ["error", {
      "code": 160,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true
    }],
    "newline-per-chained-call": ["error", {
      "ignoreChainWithDepth": 3
    }],
    "no-var": "error",
    "prefer-const": ["error", {
      "destructuring": "all"
    }]
  }
};
