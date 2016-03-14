'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('serve', function() {
    browserSync({
        notify: false,
        server: {
            baseDir: "./dist/",
            index: "index.html"
        }
    });
});