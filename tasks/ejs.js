'use strict';

var gulp    = require('gulp');
var path    = require('path');
var plumber = require('gulp-plumber');
var ejs     = require('gulp-ejs');
var fs      = require('fs');

var paths = {
    srcDir: 'src',
    distDir: 'dist'
};

var siteSettings = JSON.parse(fs.readFileSync(paths.srcDir + '/site.json'));

gulp.task('ejs', function() {
    var srcGlob = [
        paths.srcDir + '/templates/*.ejs',
        '!' + paths.srcDir + '/templates/_*.ejs'
    ];
    var distGlob = paths.distDir + '/';

    gulp.src(srcGlob)
        .pipe(plumber())
        .pipe(ejs({
            siteSettings: siteSettings
        },{
            ext: ".html"
        }
        ))
        .pipe(gulp.dest(distGlob));
});