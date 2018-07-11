var gulp = require('gulp');
var twig = require('gulp-twig');
var htmlbeautify = require('gulp-html-beautify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('templates', function() {
    return gulp.src('src/*.html') // run the Twig template parser on all .html files in the "src" directory
        .pipe(twig())
        .pipe(gulp.dest('html')); // output the rendered HTML files to the "html" directory
});

gulp.task('htmlbeautify', function() {
    var options = {
        indentSize: 4
    };
    gulp.src('./html/*.html')
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest('./public/'));
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'public'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'public'}, reload);
});
