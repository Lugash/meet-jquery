// gulpfile js
// meet jQuery
// by Lugash

var gulp = require( "gulp" ),
    babel = require( "gulp-babel" );

// --- Task for js
gulp.task( "js", function() {
    gulp.src( "src/js/**/*.js" )
        .pipe( babel() )
        .pipe( gulp.dest( "scripts" ) );
} );

// --- Wacth tasks
gulp.task( "watch", function() {
    gulp.watch( "src/js/**/*.js", [ "js" ] );
} );

// --- Aliases
gulp.task( "default", [ "js" ] );
gulp.task( "work", [ "default", "watch" ] );
