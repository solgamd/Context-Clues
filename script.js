$(document).ready(function () {
    for (i = 1; i < 101; i++) {
        $('body').append('<h3>' + 'Accusation ' + i + '</h3>');
        if (i === 100) {
            return;
        }
    };
    $(h3).click(function () {
        alert('Accusation i: I accuse ' + friend + 'with the ' + implement + 'in the ' + locale + '!')
    })
    
})

