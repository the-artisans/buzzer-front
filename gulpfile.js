var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var gulpsync = require('gulp-sync')(gulp);
var webserver = require('gulp-webserver');

var paths = {
  less: './assets/less/*.less',
  vendorScripts: [
    './assets/scripts/angular/angular.min.js',
    './assets/scripts/angular-route/angular-route.min.js',
    './assets/scripts/angular-bootstrap/ui-bootstrap.min.js',
    './assets/scripts/moment/min/moment.min.js'
  ]
}

var build = {
  root: 'build/',
  assets: './build/assets',
  css: './build/assets/css'
}

gulp.task('less', function () {
  return gulp.src('./assets/less/app.less')
    .pipe(plumber(function (err) {
      console.error('ERROR', err.message);
      this.emit('end');
    }))
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(build.css));
});

gulp.task('concat-js', function () {
  return gulp.src(paths.vendorScripts.concat(['./app/app.js', 'app/**/*.js']))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(build.root));
});

gulp.task('copy-files', function () {
  return gulp.src(['./assets/**/*'])
    .pipe(gulp.dest(build.assets));
})

gulp.task('build', gulpsync.sync(['copy-files', 'concat-js', 'less']));

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      host: '0.0.0.0',
      port: 3000,
      open: false
    }));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('./assets/less/*.less', ['build']);
  gulp.watch('./app/**/*', ['build']);
});

gulp.task('default', ['less']);