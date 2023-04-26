module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: "airbnb-base",
	overrides: [
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"max-classes-per-file": 0,
		"no-undef": 0,
		"no-tabs": 0,
    "indent": 0,
    "operator-linebreak": 0,
    "import/newline-after-import": ["error", { "count": 2 }],
		"no-unused-expressions": ["warn", { "allowShortCircuit": true }],
		"quotes": ["error", "double", { "allowTemplateLiterals": true }],
		"quote-props": ["error", "always"],
		"spaced-comment": ["error", "always"],
		"no-restricted-syntax": [
			"error",
			"LabeledStatement",
			"WithStatement",
		],
		"new-cap": 0,
		"class-methods-use-this": "warn",
		"arrow-parens": ["error", "as-needed", { "requireForBlockBody": false }],
		"array-callback-return": 0,
		"linebreak-style": 0,
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }]
	},
};
