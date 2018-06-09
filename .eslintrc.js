module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jasmine": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "prettier",
    "react"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/prop-types": 0
  }
};
