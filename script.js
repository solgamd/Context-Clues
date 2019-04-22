$(document).ready(function () {
    var i = 1;

    while (i < 101) { // Appends all 100 Accusations onto document upon load
        var h3text = `Accusation ${i}`;
        var h3 = '<h3>' + `${h3text}` + '</h3>';
        i++;
        $('body').append(h3);

    };


    $('h3').click(function () {  // Randomly generate accusation upon click / DO NOT PUT THIS IN LOOP OR OUTSIDE DOC.READY
        randomHomie = homies[Math.floor(Math.random() * homies.length)];
        randomImplement = implements[Math.floor(Math.random() * implements.length)];
        randomLocale = locales[Math.floor(Math.random() * locales.length)];

        var i = 1;
        if (i < 101) {
            alert(
                `${h3text.value}: I accuse ${randomHomie} with the ${randomImplement} in ${randomLocale}!`)
            console.log('worked');
            //i++;
        }

    })

    var homies = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];

    var implements = ['false tooth', 'dull scissors', 'prison shank', 'fishing wire', 'spoon',
        'rubber duck', 'paperback book', 'guitar pick', 'wooden plank', 'cucumber',
        'pinecone', 'plastic knife', 'really really sharp oyster shell', 'object type thingy', 'microphone stand',
        'soccer cleats', 'Persian rug', 'tambourine', 'horrible discography of John Mayer', 'photo of Snooki'];

    var locales = ['the bathroom closet', 'the litter box',
        'the pajama hamper', 'the moldy laundry room',
        'the machete cabinet', 'the used underwear vending machine factory',
        'Mr. Burns\'s wooden teeth cellar', 'your mom\'s lingerie drawer',
        'the treehouse of horrors', 'that vague area in the nondescript place'];

    var randomHomie;
    var randomImplement;
    var randomLocale;

})





