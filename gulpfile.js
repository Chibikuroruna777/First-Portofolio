'use strict';
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css'); // minify
const sourcemaps = require('gulp-sourcemaps'); // dev toolからscssの何行目か確認
const sassGlob = require('gulp-sass-glob'); // パーシャルの一括読み込み
const rename = require('gulp-rename'); // rename
const autoprefixer = require('gulp-autoprefixer'); // ベンダープレフィックス
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
});
gulp.task('minify', function () {
  return gulp.src("./assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('./assets/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.task(['sass']));
});