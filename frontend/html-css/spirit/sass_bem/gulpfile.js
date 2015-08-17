var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');


// gulp.task('default', function () {
//   console.log('Hello Gulp!')
// });

// gulpfile.js
gulp.task('scripts', function () {
  console.log('coffee task');
   gulp.src('src/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
  console.log('coffee task apply');
  gulp.watch('src/*.coffee', ['scripts']);
});




// gulp.task('sass', function () {
//   console.log('sass task');
//   gulp.src('app/styles/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./app/styles'));
// });

gulp.task('sass', function () {
  console.log('sass task');
 gulp.src('app/styles/*.scss')
   .pipe(sass({outputStyle: 'compressed'}))
   .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
  console.log('sass task');
  gulp.watch('app/styles/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'watch']);