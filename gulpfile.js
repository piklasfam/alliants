var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var post_css = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');
var changed = require('gulp-changed');
var watch = require('gulp-watch');

//uncached requirements
var require_uncached = function(module) {
    delete require.cache[require.resolve(module)];
    return require(module);
}

//compile templates
var compile_hbs = function(template_src, partials_src, dest) {
	
	//helpers
	var helpers = {
		
		/* is equal to */
		isEq: function(v1, v2, options) {
	
			if(v1 == v2) {
				return options.fn(this);
			}
			
			return options.inverse(this);
			
		},
		
		/* is not equal to */
		isNotEq: function(v1, v2, options) {
			
			if(v1 != v2) {
				return options.fn(this);
			}
			
			return options.inverse(this);
			
		},
		
		/* is modulo if with remainder */
		isModuloIf: function(num, mod, remainder, options) {
			
			if((num%mod == remainder))
				return options.fn(this);
			
			return options.inverse(this);
			
		},
		
		/* return deep link based on string */
		linkify: function(str) {
			return str.toLowerCase().replace(/ /g, '-');
		}
		
	}
	
	var hbs_options = {
		batch : [partials_src],
		helpers: helpers
	}
	 
}

//compile js
var proc_js = function(src, dest, filename) {
	
	return gulp.src(src)
		.pipe(concat(filename))
		.pipe(gulp.dest(dest));
		
}

//compile less to css
var proc_less = function(src, dest, filename) {
	
	return gulp.src(src)
		.pipe(concat(filename))
		.pipe(less())
		.pipe(post_css([autoprefixer]))
		.pipe(gulp.dest(dest));
		
}

//copy
var proc_copy = function(src, dest) {
	
	return gulp.src(src)
		.pipe(watch(src))
		.pipe(gulp.dest(dest));
		
}

var proc_imagemin = function(src, dest) {
	
	return gulp.src(src)
		.pipe(imagemin({ progressive: true }))
		.pipe(gulp.dest(dest));
		
}


gulp.task('less-to-css', function () {
	return proc_less('./css/less/**/*.less', './css/', 'style.css');
});



gulp.task('default', function() {

	gulp.start('less-to-css');
	gulp.watch(['./css/less/**/*.less'], ['less-to-css']);

});