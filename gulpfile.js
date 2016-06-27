'use strict'

const gulp = require('gulp')
const glob = require('glob')
const path = require('path')

var gulpFiles = glob.sync('./gulp/**.js')

gulpFiles.forEach(function (gulpFilePath) {
  require(path.resolve(gulpFilePath))
})

gulp.task('default', ['serve'])
