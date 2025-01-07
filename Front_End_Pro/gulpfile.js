const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  // Using the dart-sass compiler
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// SCSS Compilation and Minification Task
gulp.task('styles', () => {
  return gulp.src('src/scss/**/*.scss')  // Input directory for SCSS files
    .pipe(sass().on('error', sass.logError)) // Compile SCSS
    .pipe(cleanCSS()) // Minify CSS
    .pipe(rename({ suffix: '.min' })) // Rename to add .min
    .pipe(gulp.dest('dist/css')); // Output directory for compiled CSS
});

// JavaScript Minification Task
gulp.task('scripts', () => {
  return gulp.src('src/js/**/*.js')  // Input directory for JS files
    .pipe(uglify()) // Minify JS
    .pipe(rename({ suffix: '.min' })) // Rename to add .min
    .pipe(gulp.dest('dist/js')); // Output directory for minified JS
});

// Default task to run both 'styles' and 'scripts'
gulp.task('default', gulp.parallel('styles', 'scripts'));
