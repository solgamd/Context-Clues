$(document).ready(function () {

    var homies = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];

    var implements = ['false tooth', 'dull scissors', 'prison shank', 'fishing wire', 'spoon',
        'rubber duck', 'paperback book', 'guitar pick', 'wooden plank', 'cucumber',
        'pinecone', 'plastic knife', 'really really sharp oyster shell', 'object type thingy', 'microphone stand',
        'soccer cleats', 'Persian rug', 'tambourine', 'discography of John Mayer', 'photo of Snooki'];

    var locales = ['the bathroom closet', 'the litter box',
        'the pajama hamper', 'the moldy laundry room',
        'the machete cabinet', 'the used underwear vending machine factory',
        'Mr. Burns\'s wooden teeth cellar', 'your mom\'s lingerie drawer',
        'the treehouse of horrors', 'that vague area in the nondescript place'];

    var randomHomie = homies[Math.floor(Math.random() * homies.length)];
    var randomImplement = implements[Math.floor(Math.random() * implements.length)];
    var randomLocale = locales[Math.floor(Math.random() * locales.length)];
    

    for (var i = 1; i <= 100; i++) {        // GENERATES LIST OF ACCUSATIONS
        var h3 = $('<h3></h3>');
        h3.text(`Accusation ${i}`);
        $('body').append(h3);
        h3.click(accuse(i));
    }

    function accuse() {                // POP-UP ALERT WITH RANDOM ACCUSATION
        var alertText = `Accusation ${i}: I accuse ${randomHomie} with the ${randomImplement} in ${randomLocale}!`;
        return function() {
            alert(alertText);
        };
    }
})





