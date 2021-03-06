const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.sourceMaps()
	.version([])
	.js('resources/assets/js/app.js', 'public/js')
	.extract(['axios', 'moment', 'vue', 'vue-router'])
	.sass('resources/assets/sass/app.scss', 'public/css')
	.options({
		extractVueStyles: 'public/css/vue.css'
	});
