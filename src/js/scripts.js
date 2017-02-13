// js
// meet jQuery
// by Lugash

// functions
let iTrombinoCurentIndex = 0,
    iTrombinoLength,
    $trombinoFigures;

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

const fUpdateTrombino = function() {
    $trombinoFigures[ iTrombinoCurentIndex ].classList.add( "hide" );
    if ( ++iTrombinoCurentIndex === iTrombinoLength ) {
        iTrombinoCurentIndex = 0;
    }
    $trombinoFigures[ iTrombinoCurentIndex ].classList.remove( "hide" );
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

    // 2. tab Pane active
    Array.from( document.querySelectorAll( "ul.nav.nav-tabs a" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fHandleTabClick );
    } );

    // 3. Trombinoscope img
    document.querySelectorAll( "#trombino figure:not(:first-of-type)" ).forEach( function( $elt ) {
        $elt.classList.add( "hide" );
    } );
    $trombinoFigures = Array.from( document.querySelectorAll( "#trombino figure" ) );
    iTrombinoLength = $trombinoFigures.length;
    setInterval( fUpdateTrombino, 1000 );

} );
