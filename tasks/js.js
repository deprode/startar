'use strict';

var gulp       = require('gulp');
var babel      = require('gulp-babel');
var concat     = require('gulp-concat');
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

gulp.task('js', function() {
    var srcGlob = [paths.srcDir + '/js/*.js'];
    var distGlob = paths.distDir + '/js';

    gulp.src(srcGlob)
        .pipe(concat('app.js'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify({
            mangle: isProduction,
            compress: isProduction,
            preserveComments: 'same'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distGlob));
});