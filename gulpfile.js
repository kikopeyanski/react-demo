let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let babel = require('gulp-babel');

gulp.task('js', function () {
    return gulp.src('./src/**/*.{js,jsx}')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/*.{js,jsx}", ['js-watch']);
});

gulp.task('default', ['serve']);