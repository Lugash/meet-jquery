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

const fhandleFormValidation = function ( oEvent ) {
    let bHasErrors = false,
        sEmail, sName, sComment;

    // 1. check email
    sEmail = ( $emailInput.val() || "" ).trim(); // trim supprime espaces a la fin et debut
    if ( !rEmailValidation.test( sEmail ) ) {
        console.error( "Email not good!" );
        bHasErrors = true;
    } else {
        console.info ( "Email good!" );
    }

    // 2. check name
    sName = ( $nameInput.val() || "" ).trim();
    if ( sName.length < 4 ) {
        console.error( "Name not good!" );
        bHasErrors = true;
    } else {
        console.info ( "Name good!" );
    }

    // 3. check comment
    sComment = ( $commentTextarea.val() || "" ).trim();
    if ( sComment.length < 5 || sComment.length > 150 ) {
        console.error( "Comment not good!" );
        bHasErrors = true;
    } else {
        console.info ( "Comment good!" );
    }

    // 4. errors
    if ( bHasErrors ) {
        window.alert( "Veuillez remplir tous les champs blablabla!" );
        return false;
    }

    // return false; // evenement ne se produit pas, form non validé
    return true; // evenement se produit, form validé et donc, envoyé

}

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
    $commentForm = $( "form" );
    $emailInput = $( "#inputEmail" );
    $nameInput = $( "#inputName" );
    $commentTextarea = $( "#inputComment" );

    $commentForm.on( "submit", fhandleFormValidation );


} );
