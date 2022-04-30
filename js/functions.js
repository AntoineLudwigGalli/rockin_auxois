// Fonction permettant "d'ouvrir la vue"
function openView(){

    // Suppression de l'ancien écouteur d'évènement click pour éviter leur accumulation
    $('.target').off('click');

    // Animation sur petit texte (le masquer)
    $('.target .tiny').fadeOut();

    // Animations sur target (deplacement + agrandissement)
    $('.target').animate({

        'left' : '25%',
        'top' : '25%',

    }, 750).animate({

        'width' : '50%',
        'height' : '450px',


    }, 750, function(){


        // Animation d'apparition du grand texte
        $('.target .normal').fadeIn();

        // Mise en place d'un écouteur d'évènement permettant au click de fermer la vue
        $('.target').click(function(){

            closeView();

        });

    });

}

// Fonction permettant de "fermer la vue"
function closeView(){

    // Suppression de l'ancien écouteur d'évènement click pour éviter leur accumulation
    $('.target').off('click');

    // Animation sur le grand texte (le masquer)
    $('.target .normal').hide();

    // Animations sur target (deplacement + agrandissement)
    $('.target').animate({

        'width' : '200px',
        'height' : '50px',

    }).animate({

        'left' : '25px',
        'top' : '25px',

    }, 750, function(){

        // Animation d'apparition du petit texte
        $('.target .tiny').fadeIn();

        // Mise en place d'un écouteur d'évènement permettant au click d'ouvrir la vue
        $('.target').click(function(){

            openView();

        });

    });

}
closeView();

// Si la div target est cliquée, on ouvre la vue en appelant la fonction openView()
$('.target').click(function(){

    openView();

});