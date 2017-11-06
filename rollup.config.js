export default {
	context: 'window',
	input: 'index.js',
	plugins: [],
	output: [
		{file: 'bundle.js', format: 'iife'}
	],
	sourcemap: true
};
