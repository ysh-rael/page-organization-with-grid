const gulp = require('gulp')
const { series } = gulp
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function minCss(cb) {
    gulp.src('css/**/*')
    .pipe(uglifyCss())
    .pipe(concat('min.style.css'))
    .pipe(gulp.dest('./../'))
    return cb()
}

function minHtml(cb) {
    gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./../'))
    return cb()
}

exports.default = series(minCss, minHtml)
