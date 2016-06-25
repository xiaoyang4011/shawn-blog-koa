'use strict'

const gulp = require('gulp')
const glob = require('glob')

var gulpFiles = glob.sync('./gulp/**.js')

gulpFiles.forEach(function (gulpFilePath) {
  require(gulpFilePath)
})

gulp.task('default', ['serve'])
