const gulp = require('gulp'),
	  less = require('gulp-less'),	
	  LessAutoprefix = require('less-plugin-autoprefix'),
	  cssnano = require('gulp-cssnano'),	
	  babel = require('gulp-babel'),
	  uglify = require('gulp-uglify'),
	  imagemin = require('gulp-imagemin'),
	  pngquant = require('imagemin-pngquant');

	  autoprefix = new LessAutoprefix({ browsers: ['> 0%'] });

gulp.task('styles', () => {
	return gulp.src(['less/**/*.less'])
	 .pipe(less({
	    plugins: [autoprefix],
	  }))
	 .pipe(cssnano())
  	.pipe(gulp.dest('dist/css'));
});


gulp.task('js', () => {
	return gulp.src('js/**/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sources', () => { 
	return gulp.src(['images/**/*.{jpg,png,gif,svg,ico}'])
	.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
	.pipe(gulp.dest('dist/images'));
});

gulp.task('default', () => {
	gulp.watch('less/**/*.less', ['styles']);
});

gulp.task('build', () => {
	gulp.start(['js', 'sources']);
});

