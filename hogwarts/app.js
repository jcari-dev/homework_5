$(() => {
    let $container = $('#container');

    //======================== Year 1
    let $h1 = $('<h1> Hogwarts </h1>');

    $('#container').append($h1);
    //======================== Year 2
    let $h2 = $('<h2> Jorge Caridad </h2>');

    $('#container').append($h2);

    let $h3 = $('<h3> Ravenclaw </h3>');

    $('#container').append($h3);

    let $h4 = $('<h4 class="seaUnicorn"> cheese </h4>');
    $('#container').append('<h4> Just a stick, I mean "Wand" </h4>');
    $('#container').append($h4); // not exactly in the order that it shows 
    //in the hw, like seaUnicorn appears beneath, but couldn't think 
    //of a better way!
    //======================== Year 3
    $('#container').append('<ul storage="trunk"></ul>'); //for some reason if I make "let $ul = ...", it doesnt work!
    $('ul').append('<li>Butter Beer</li>');
    $('ul').append('<li>Butter beer</li>');
    $('ul').append('<li class="secret">invisibility Cloak</li>');
    $('ul').append('<li class="secret">magic map</li>');
    $('ul').append('<li class="secret">time turner</li>');
    $('ul').append('<li class="cat">leash</li>');
    $('ul').append("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>");
    $('#container').append($ul);
    //======================== Year 4



})