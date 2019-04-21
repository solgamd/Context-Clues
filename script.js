$(document).ready(function () {
    for (i = 1; i < 101; i++) {

        $('body').append('<h3>' + 'Accusation ' + i + '</h3>');
        if (i === 100) {
            return;
        }
    };
    $(h3).click(function () { // Not sure why this isn't working
    console.log('worked');
        alert('Accusation i: I accuse ' + homies + 'with the ' + implements + 'in ' + locales + '!')
    })
})

// let homies = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];

// let locales = ['the bathroom closet', 'the cat food receptacle',
//               'the pajama hamper', 'the moldy washing machine',
//               'the machete cabinet', 'the used underwear vending machine',
//               'Mr. Burns\'s wooden teeth preserver', 'your mom\'s lingerie drawer',
//               'the treehouse of horrors', 'that vague area in the nondescript place'];

// let implements = ['false tooth', 'dull scissors', 'prison shank', 'fishing wire', 'spoon',
//                   'rubber duck', 'paperback book', 'guitar pick', 'wooden plank', 'cucumber',
//                   'pinecone', 'plastic knife', 'really really sharp oyster shell', 'object type thingy', 'microphone stand',
//                   'soccer cleats', 'Persian rug', 'tambourine', 'horrible discography of John Mayer', 'photo of Snooki'];


