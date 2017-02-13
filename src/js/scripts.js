// js
// meet jQuery
// by Lugash

// console.log( "Hello, dude!" );

// page loads
window.addEventListener( "load", function() {

    // 1. select w/ a rel=external
    Array.from( document.querySelectorAll( 'a[rel="external"]' ) ).forEach( function( $elt ) {
        // $elt.addEventListener( "click", function( oEvent ) {
        //     oEvent.preventDefault();
        //     window.open( oEvent.currentTarget.getAttribute( "href" ) );
        // } );
        $elt.setAttribute( "target", "_new" );
    } );

    // 2. select w/ a rel=external

    // 3. select w/ a rel=external


} );
