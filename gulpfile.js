'use strict';

var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var csso = require('gulp-csso');
var gulp = require('gulp');
var del = require('del');


// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./css/*.css')
        // Concat every css file
        .pipe(concatCss('styles.css'))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./dist/css'))
});


// Gulp task to minify JavaScript files
gulp.task('scripts', function () {
    return gulp.src('./js/*.js')
        // Babel from ES6 to ES5
       
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('dist/js'))
});


// Gulp task to minify HTML files
gulp.task('pages', function () {
    return gulp.src(['./*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
});


// Clean output directory
gulp.task('clean', function () {
   del(['dist/*.*'])
   del(['dist/css/'])
   del(['dist/js/'])
});

// Gulp task to minify all files
gulp.task('default', gulp.parallel('clean', 'styles', 'scripts', 'pages'));