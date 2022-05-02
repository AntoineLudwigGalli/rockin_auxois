// Si la div target est cliquée, on ouvre la vue en appelant la fonction openView()
$('.target').click(function(){

    openView();

});

//Classe active sur élément de la navbar cliqué

// Selection des bouton des tabulations
let navlinks = $(".nav-link");

// Mise en place d'un écouteur "click" sur chaque tabulation
navlinks.each(function (){
    $(this).click(function(){
        $("navlinks .active").removeClass('active');

        $(this).addClass('active');
    })
})

