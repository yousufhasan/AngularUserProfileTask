var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

// Include plugins
var concat = require('gulp-concat');
 // Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src(['bower_components/angular/angular.min.js','bower_components/angular-resource/angular-resource.min.js', 'js/app.js','js/config.js','js/Services/userProfileSVC.js','js/Controllers/userProfileCtrl.js'])
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
});

gulp.task('css', function() {
    return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css','bower_components/font-awesome/css/font-awesome.min.css', 'css/main.css'])
      .pipe(concat('main.css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifyCSS())
      .pipe(gulp.dest('build/css'));
});

// Watch for changes in files
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('js/*.js', ['scripts']);

 });

 // Default Task
gulp.task('default', ['scripts','css','watch']);