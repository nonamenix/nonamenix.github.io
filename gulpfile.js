var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('default', function() {
  return gulp.src('assets/resources/respond/Respond.min.js')
      .pipe(webpack())
      .pipe(gulp.dest('assets/compiled'));
});