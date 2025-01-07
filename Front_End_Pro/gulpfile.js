const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');


gulp.task('styles', () => {
  return gulp.src('src/scss/**/*.scss')  
    .pipe(sass().on('error', sass.logError)) 
    .pipe(cleanCSS()) 
    .pipe(rename({ suffix: '.min' })) 
    .pipe(gulp.dest('dist/css')); 
});


gulp.task('scripts', () => {
  return gulp.src('src/js/**/*.js')  
    .pipe(uglify()) 
    .pipe(rename({ suffix: '.min' })) 
    .pipe(gulp.dest('dist/js')); 
});

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass')); 
  gulp.watch('*.html').on('change', browserSync.reload); 
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload); 
});


gulp.task('default', gulp.parallel('styles', 'scripts'));
