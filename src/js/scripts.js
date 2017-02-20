// js
// meet jQuery
// by Lugash

// variables
let $tabs;
let $trombinoFigures;

const fChangeTab = function(oEvent ) {
    oEvent.preventDefault();

    $tabs.parent().filter( ".active" ).removeClass( "active" );
    $( this ).parent().addClass( "active" );
    $( ".tab-content .tab-pane.active" ).removeClass( "atcive" );
    $( `#${ $( this ).data( "tab-target" ) }` ).addClass( "active" );
};

const fHandleTrombino = function () {
    // .fadeOut() // .hide() .slideUp()
    $trombinoFigures.filter( ":visible" ).fadeOut( function () {
        let $next = $( this ).next();
        if ( $next.length === 0 ) {
            $next = $trombinoFigures.first();
        }
        $next.fadeIn( 100 ); // .show() .slideDown()
    } );

};

// call when Dom is ready
$( function() {

    // 1. link rel=external
    $( 'a[rel*="external"]' ).attr( "target", "_new" );

    // 2. tab pane
    // $tabs = $( "ul.nav.nav-tabs a" );
    // $tabs.on( "click", fChangeTab );
    ( $tabs = $( "ul.nav.nav-tabs a" ) ).on( "click", fChangeTab );

    // 3. trombinoscope
    $trombinoFigures = $( "#trombino figure" );
    $trombinoFigures.hide().first().show();
    setInterval( fHandleTrombino, 1000 );

} );
