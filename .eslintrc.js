module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "quotes": ["error", "single"],
        "indent": ["error",4]
    }
};