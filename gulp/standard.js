'use strict'

const gulp = require('gulp')
const standard = require('gulp-standard')

gulp.task('standard', function () {
  return gulp.src(['./*.js', './server/**/*.js', './test/**/*.js', './gulp/*.js', './bin/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})
