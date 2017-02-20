// js
// meet jQuery
// by Lugash

// variables
const rEmailValidation = /([\w-\.]+)@((?:[\w]+\.)+)([a-z]{2,})/i; // a-z0-9 = \w

let $tabs, $trombinoFigures, $commentForm, $emailInput, $nameInput, $commentTextarea;

const fChangeTab = function( oEvent ) {
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

const fCheckEmail = function () {
    let sEmail = ( $emailInput.val() || "" ).trim(),
        bIsValid = rEmailValidation.test( sEmail );

    $emailInput.parents( ".control-group" ).toggleClass( "error", !bIsValid );
    return bIsValid;
};

const fCheckName = function () {
    let sName = ( $nameInput.val() || "" ).trim(),
        bIsValid = sName.length > 4;

    $nameInput.parents( ".control-group" ).toggleClass( "error", !bIsValid );
    return bIsValid;
};

const fCheckComment = function () {
    let sComment = ( $commentTextarea.val() || "" ).trim(),
        bIsValid = sComment.length > 10 && sComment.length < 150;

    $commentTextarea.parents( ".control-group" ).toggleClass( "error", !bIsValid );
    return bIsValid;
};

const fhandleFormValidation = function () {
    let aChecks = [ fCheckEmail(), fCheckName(), fCheckComment() ],
        bAllIsOk;

    bAllIsOk = aChecks.reduce( function ( bPrevious, bCurrent ) { // reduce => boucle mais plus classe !
        return bPrevious && bCurrent;
    }, true );

    if ( bAllIsOk ) {
        return true;
    }

    window.alert( "Veuillez compéter correctement les champs!" );
    return false;
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

    // 4. form validation
    ( $commentForm = $( "form" ) ).on( "submit", fhandleFormValidation );
    ( $emailInput = $( "#inputEmail" ) ).on( "blur", fCheckEmail ); // blur = au relachement du focus
    ( $nameInput = $( "#inputName" ) ).on( "blur", fCheckName );
    ( $commentTextarea = $( "#inputComment" ) ).on( "blur", fCheckComment );

} );
