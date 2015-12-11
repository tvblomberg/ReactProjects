'use strict';

var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var exec = require('child_process').exec;

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('live-server', function() {
    var server = new liveServer('server/main.js');
    server.start();
});

gulp.task('bundle', ['copy'], function() {
    return browserify({
        entries: 'app/main.jsx',
        debug: true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('copy', function() {
    gulp.src(['app/*.css'])
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('start-mongo', runCommand('mongod'));

gulp.task('serve', ['bundle', 'live-server'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
});






