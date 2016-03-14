'use strict';

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');

var paths = {
    srcDir: 'src',
    distDir: 'dist'
};

gulp.task('image', function() {
    var srcGlob = paths.srcDir + '/images/*.{gif,jpg,jpeg,png,svg}';
    var distGlob = paths.distDir + '/img';

    gulp.src(srcGlob)
            .pipe(imagemin({
                optimizationLevel: 7
            }))
            .pipe(gulp.dest(distGlob));
});