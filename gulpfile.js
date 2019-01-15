'use strict';
 
var gulp 			= require('gulp'),
	sass 				= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	cleanCSS 		= require('gulp-clean-css'),
	sourcemaps 		= require('gulp-sourcemaps'),
	rename 			= require('gulp-rename'),
	purify 			= require('gulp-purifycss'),
	concat 			= require('gulp-concat'),
	minify 			= require('gulp-minify'),
	autoprefixer 	= require('gulp-autoprefixer');

var sourcePattern = './app/assets/vendor/bootstrap/scss/**/*.scss';
var sourceBootstrap =  './app/assets/vendor/bootstrap/scss/bootstrap.scss';
var distPath = './app/assets/dist/css';
var templatesPattern = './app/pages/**/*.php';

gulp.task('scss', function () {
	return gulp.src(sourceBootstrap)
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expand'}).on('error', sass.logError))
	.pipe(autoprefixer({
		 browsers: ['last 3 versions']
    }))
	.pipe(cleanCSS()) //розкоментувати для мініфікації
	.pipe(sourcemaps.write('../'))
	.pipe(gulp.dest(distPath))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', function() {
	browserSync({
		proxy: 'upqode',
		notify: false,
	});
});

gulp.task('watch', ['scss', 'browser-sync'], function() {
	gulp.watch(['assets/scss/*.scss',sourcePattern], function(event, cb) {
		setTimeout(function(){gulp.start('scss');},1000);
	});
	gulp.watch(['app/*.php','app/assets/js/*.js'], browserSync.reload);
	gulp.watch(sourcePattern, browserSync.reload);
});


gulp.task('default', ['watch']);

/*
gulp.task('buildJs', function(){
	return gulp.src(['app/assets/vendor/jquery/dist/jquery.min.js',
		'app/assets/vendor/fullpage.js/vendors/scrolloverflow.min.js',
		'app/assets/vendor/fullpage.js/dist/fullpage.min.js',
		'app/assets/vendor/twentytwenty-master/js/jquery.twentytwenty.js',
		'app/assets/vendor/twentytwenty-master/js/jquery.event.move.js',
		'app/assets/vendor/chocolat/dist/js/jquery.chocolat.min.js',
		'app/assets/vendor/jquery-mask-plugin/dist/jquery.mask.min.js',
		'app/assets/vendor/swiper/dist/js/swiper.min.js',
		'app/assets/js/scripts.js'])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./app/assets/js/dist'));
});

gulp.task('compressJs',['buildJs'], function() {
  gulp.src(['app/assets/js/dist/main.js'])
    .pipe(minify({
    	ext:{
    		src:'.min.js',
    		min:'.js'
    	},
    }))
    .pipe(gulp.dest('app/assets/js/dist/'))
});

gulp.task('buildCss', function(){
	return gulp.src(['app/assets/vendor/fullpage.js/dist/fullpage.min.css',
		'app/assets/vendor/twentytwenty-master/css/twentytwenty.css',
		'app/assets/vendor/swiper/dist/css/swiper.min.css',
		'app/assets/dist/css/style.min.css'
		])
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./app/assets/dist/css/'));
});

gulp.task('compressCss',['buildCss'], function() {
  gulp.src(['app/assets/dist/css/main.css'])
	.pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/assets/dist/css/'))
});

gulp.task('build', ['compressCss','compressJs']);
*/

