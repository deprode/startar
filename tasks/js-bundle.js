'use strict';

var gulp       = require('gulp');
var glob       = require('glob');
var browserify = require('browserify');
var babelify   = require('babelify');
var licensify  = require('licensify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');
var minimist   = require('minimist');

var paths = {
    srcDir: 'src',
    distDir: 'dist'
};

var options = minimist(process.argv.slice(2), {
    string: 'env',
    env: process.env.NODE_ENV || 'development'
});
var isProduction = (options.env === 'production');

gulp.task('js-bundle', function () {
    var srcGlob = glob.sync(paths.srcDir + '/js/*.js');
    var distGlob = paths.distDir + '/js';

    browserify({
        entries: srcGlob,
        debug: isProduction
    })
        .transform(babelify, {presets: ['es2015']})
        .plugin(licensify)
        .bundle()
        .on('error', err => console.log('Error : ' + err.message))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify({
            output: {comments: /generated by licensify/}
        }))
        .pipe(gulp.dest(distGlob));
});