module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: 'airbnb-base',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		"quote-props": { "keywords": true },
		"extends": "airbnb-base",
		'no-restricted-syntax': [
			'error',
			'LabeledStatement',
			'WithStatement',
		],
		"linebreak-style": 0,
	},
};
