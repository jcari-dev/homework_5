$(() => {
    let $container = $('#container');

//======================== Year 1
    let $h1 = $('<h1> Hogwarts </h1>');

    $('body').append($h1);
//======================== Year 2 
    let $h2 = $('<h2> Jorge Caridad </h2>');

    $('body').append($h2);
//========================
    let $h3 = $('<h3> Ravenclaw </h3>');

    $('body').append($h3);
//========================
    let $h4 = $('<h4 class="seaUnicorn"> cheese </h4>');
    $('body').append('<h4> Just a stick, I mean "Wand" </h4>'); 
    $('body').append($h4); // not exactly in the order that it shows 
    //in the hw, like seaUnicorn appears beneath, but couldn't think 
    //of a better way!


})