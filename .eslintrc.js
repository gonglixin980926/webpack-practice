module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
		'ecmaFeatures':{
			'impliedStrict': true
		}
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		"@typescript-eslint/no-unused-vars": ["off"],
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-empty-function": ["off"],
		"@typescript-eslint/explicit-module-boundary-types": ["off"],
		"no-mixed-spaces-and-tabs": ["off"],
		'@typescript-eslint/indent': 0,
		'no-mixed-spaces-and-tabs':0,
		'linebreak-style': [
			'error',
			'unix'
		]
	},
	"overrides": [
		{
		  "files": ["*-test.js","*.spec.js"],
		  "rules": {
			"no-unused-expressions": "off"
		  }
		}
	]
};
