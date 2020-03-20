setTimeout(function () {

    $('.colorBlock').slideToggle(20000, function () {

        $('#time').text('1 minutes')

    });

}, 1000);


setTimeout(function () {

    $('.colorBlock').slideToggle(20000, function () {
        $('#time').text('0 minutes')
    });

},20100);