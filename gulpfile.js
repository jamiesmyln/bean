var gulp  = require('gulp'),
    gutil = require('gulp-util');
    less  = require('gulp-less');
    minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('copyHtml', function() {
  // copy any html files in source/ to dist/
  gulp.src('./src/test/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
  return gulp.src('./src/less/common.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/less/**/*.less', ['less']);
});