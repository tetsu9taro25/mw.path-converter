
var gulp    = require('gulp');
var sass    = require('gulp-sass');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify'); //<-

//sass
gulp.task('sass', function(){
  gulp.src('./src/scss/*.scss')
    .pipe(plumber()) //<-
    .pipe(sass())
    .pipe(gulp.dest('./prod/css'))
    .pipe(connect.reload());
});



//sass
gulp.task('sass', function(){
  gulp.src('./src/scss/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe(sass())
    .pipe(gulp.dest('./prod/css'))
    .pipe(connect.reload());
});
