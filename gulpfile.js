'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var requireDir  = require('require-dir')
var dir         = requireDir('./tasks', {recurse: true});

var paths = {
    srcDir: 'src',
    distDir: 'dist'
};

gulp.task('build', ['html', 'stylus', 'ejs', 'js-bundle', 'image']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ["html", reload]);
    gulp.watch('src/stylus/**/*.styl', ["stylus", reload]);
    gulp.watch(['src/templates/*.ejs', 'site.json'], ["ejs", reload]);
    gulp.watch('src/js/**/*.js', ["js-bundle", reload]);
    gulp.watch('src/images/*.{gif,jpg,jpeg,png,svg}', ["image"]);
})

gulp.task('default', ['build', 'serve', 'watch']);