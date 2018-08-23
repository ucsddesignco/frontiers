/*
 * gulpfile.js
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('sass', function() {
   return gulp
     .src('public/scss/main.scss')
     .pipe(sass())
     .pipe(postcss([autoprefixer({browsers: ['last 2 version']})]))
     .pipe(gulp.dest('public/css'))
     .pipe(browserSync.reload({
       stream: true
     }))
});

gulp.task('watch', function() {
   gulp.watch('public/scss/**/*.scss', ['sass']);
   gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'sass', 'browserSync']);
