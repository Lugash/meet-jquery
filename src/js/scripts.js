// js
// meet jQuery
// by Lugash

const fHandleTabClick = function ( oEvent ) {
    oEvent.preventDefault();
    const $target = oEvent.currentTarget;

    if ( $target.parentNode.classList.contains( "active" ) ) {
        // console.log( "Tab is active!" );
        return;
    }

    document.querySelector( "ul.nav-tabs li.active" ).classList.remove( "active" );
    $target.parentNode.classList.add ( "active" );
    document.querySelector( ".tab-content .tab-pane.active" ).classList.remove( "active" );
    document.getElementById( $target.getAttribute( "data-tab-target" ) ).classList.add( "active" );
};

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
    Array.from( document.querySelectorAll( "ul.nav.nav-tabs a" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fHandleTabClick );
    } );

    // 3. select w/ a rel=external


} );
