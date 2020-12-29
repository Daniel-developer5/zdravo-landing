const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css')
    
const style = () => {
    return gulp.src('./scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream())
}
    
const watch = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js').on('change', minifyJS)
}

const minifyJS = () => {
    return gulp.src('./js/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream())
}

const minifyCss = () => {
    return gulp.src('./build/index.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'))
}
    
exports.style = style
exports.watch = watch
exports.minifyJS = minifyJS
exports.minifyCss = minifyCss