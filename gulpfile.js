const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css'); // minify
const sourcemaps = require('gulp-sourcemaps'); // dev toolからscssの何行目か確認
const sassGlob = require('gulp-sass-glob'); // パーシャルの一括読み込み
const rename = require('gulp-rename'); // rename
const autoprefixer = require('gulp-autoprefixer'); // ベンダープレフィックス

//参照元パス
const srcPath = {
  css: 'src/scss/**/**.scss',
}

//出力先パス
const destPath = {
  css: 'css/',
}

// プラグインの処理をまとめる
const cssSass = () => {
  return src(srcPath.css) //コンパイル元
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('assets/css'))     //コンパイル先
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compact' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('./assets/css'))
}

exports.default = series(cssSass);