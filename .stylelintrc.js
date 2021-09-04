module.exports = {
	extends: [
		"@wordpress/stylelint-config/scss",
		"stylelint-config-rational-order"
	],
  ignoreFiles: [
		'node_modules/**/*.css',
		'src/**/*.js'
  ],
	rules: {
		'no-descending-specificity': null,
		'font-weight-notation': null,
		'font-family-no-missing-generic-family-keyword': null,
		'selector-class-pattern': null,
		'at-rule-empty-line-before': null,
	}
}
