// Fonction permettant "d'ouvrir la vue"
function openView() {

    // Suppression de l'ancien écouteur d'évènement click pour éviter leur accumulation
    $('.target')
        .off('click');

    // Animation sur petit texte (le masquer)
    $('.target .tiny').fadeOut(750);

    // Animations sur target (deplacement + agrandissement)
    if (window.innerWidth > 768) {
        $('.target').animate({
            'margin-left': '40%',
            'margin-top': '50px',
        },750).animate({
            'width': '50%',
            'height': '450px',
        },750, function () {
            // Animation d'apparition du grand texte
            $('.target .normal').fadeIn(750);

            // Mise en place d'un écouteur d'évènement permettant au click de fermer la vue
            $('.target').click(function () {
                    closeView();
            });
        });
    } else {
        $('.target').animate({
            'margin' : '0',
            'width': '100%',
            'height' : '100%',
            'padding' : '0',
        },750, function () {
            // Animation d'apparition du grand texte
            $('.target .normal').fadeIn(750);

            // Mise en place d'un écouteur d'évènement permettant au click de fermer la vue
            $('.target').click(function () {
                closeView();
            });
        });
    }
}

// Fonction permettant de "fermer la vue"
function closeView(){

    // Suppression de l'ancien écouteur d'évènement click pour éviter leur accumulation
    $('.target').off('click');

    // Animation sur le grand texte (le masquer)
    $('.target .normal').hide(750);

    if (window.innerWidth > 768) {
        $('.target').animate({

            'width' : '250px',
            'height' : '50px',

        },750).animate({

            'margin-left' : '0',
            'margin-top' : '0',

        }, 750, function(){

            // Animation d'apparition du petit texte
            $('.target .tiny').fadeIn(1000);

            // Mise en place d'un écouteur d'évènement permettant au click d'ouvrir la vue
            $('.target').click(function(){

                openView();

            });

        });
    } else {
        $('.target').animate({

            'height' : '50px',
        },750).animate({
            'width': '80%',
            'margin' : '10%',
        },750, function () {
            // Animation d'apparition du grand texte
            $('.target .tiny').fadeIn(1000);

            // Mise en place d'un écouteur d'évènement permettant au click de fermer la vue
            $('.target').click(function () {
                openView();
            });
        });
    }
}
