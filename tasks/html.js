'use strict';

var gulp = require('gulp');

var paths = {
    srcDir: 'src',
    distDir: 'dist'
};

gulp.task('html', function() {
    var srcGlob = paths.srcDir + '/**/*.html';
    var distGlob = paths.distDir;

    return gulp.src(srcGlob)
        .pipe(gulp.dest(distGlob));
});