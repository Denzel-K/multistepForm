const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', () => {
    return gulp.src('sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () => {
    gulp.watch('sass/main.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});

