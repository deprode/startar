'use strict';

var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var stylus       = require('gulp-stylus');
var swiss        = require('kouto-swiss');
var autoprefixer = require('gulp-autoprefixer');
var stylint      = require('gulp-stylint');
var plumber      = require('gulp-plumber');

var paths = {
    srcDir: 'src',
    distDir: 'dist'
};

gulp.task('stylus', function () {
    var srcGlob = paths.srcDir + '/stylus/*.styl';
    var distGlob = paths.distDir + '/css';

    gulp.src(srcGlob)
        .pipe(plumber())
        .pipe(stylint({rules: {
            semicolons: 'always',
            blackets: 'always',
            colons: 'always',
            sortOrder: 'grouped'
        }}))
        .pipe(stylint.reporter())
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress: true,
            use: [swiss()]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distGlob));
});
