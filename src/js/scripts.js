// js
// meet jQuery
// by Lugash

// variables
let $tabs;

const fChangeTab = function(oEvent ) {
    oEvent.preventDefault();

    $tabs.parent().filter( ".active" ).removeClass( "active" );
    $( this ).parent().addClass( "active" );
    $( ".tab-content .tab-pane.active" ).removeClass( "atcive" );
    $( `#${ $( this ).data( "tab-target" ) }` ).addClass( "active" );
};

// call when Dom is ready
$( function() {

    // 1. link rel=external
    $( 'a[rel*="external"]' ).attr( "target", "_new" );

    // 2. tab pane
    // $tabs = $( "ul.nav.nav-tabs a" );
    // $tabs.on( "click", fChangeTab );
    ( $tabs = $( "ul.nav.nav-tabs a" ) ).on( "click", fChangeTab );

} );
