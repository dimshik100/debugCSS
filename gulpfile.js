var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var sourceFolder = './sass';
var sourceFile = './sass/debugCSS.scss';
var outputFolder = './dist/css';


var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

gulp.task('sass', function () {
	return gulp.src(sourceFile) // Gets all files ending with .scss in ./scss and children dirs
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(outputFolder))
});

gulp.task('watch', ['browserSync', 'sass'], function () {

	// Watch the input folder for change,
	// and run `sass` task when something happens
	gulp.watch(sourceFolder + '/**/*', ['sass'])
		// When there is a change,
		// log a message in the console
		.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
			browserSync.reload();
		});

	// Reloads the browser whenever HTML or JS files change
	gulp.watch('*.html', browserSync.reload);
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			//      baseDir: 'app'
		},
	})
});

gulp.task('minify-css', ['sass'], function () {
	return gulp.src(outputFolder + '/debugCSS.css')
		.pipe(cleanCSS({
			debug: true
		}, function (details) {
			console.log(details.name + ' size reduced from : ' + details.stats.originalSize + ' bytes, to : ' + details.stats.minifiedSize + ' bytes');
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(outputFolder));
});


gulp.task('build', ['minify-css']);

gulp.task('default', ['sass', 'watch']);
