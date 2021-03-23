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

    let $h4 = $('<h4 class="seaUnicorn" id="cheese"> cheese (yes, my sea unicorn\'s name is "cheese") </h4>');
    $('#container').append('<h4 id="wand"> Just a stick, I mean "Wand" </h4>');
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
    $('ul').append('<li class="seaUnicorn">leash</li>');
    $('ul').append("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>");

    //======================== Year 4

    $('#container').append('<h5>Winter/Spring/Summer 2021</h5>'); // Are we really doing an one liner here...                                             Yup....                                   Woah....                        I promise it's kind of readable...                                Please don't fire me I have a wife (not yet, but in July!) and three kids (it's actually one cactus)
    $('#container').append('<table><tr><th>Day</th><th>Classes</th><tr><td>Monday</td><td>None</td></tr><tr><td>Tuesday</td><td>SEI302</td></tr><tr><td>Wednesday</td><td>SEI302</td></tr><tr><td>Thursday</td><td>SEI302 Outcomes</td></tr><tr><td>Friday</td><td>None</td></tr><tr><td>Saturday</td><td>SEI302</td></tr><tr><td>Sunday</td><td>None</td></tr>')
    // in all seriousness, im sorry I am aware that this is prob not good practice, I'm sorry!

    //======================== Year 5

    $('#wand').remove(); // had to give an id to wand, I guess?
    $('li:first-child').remove();
    $('li:first-child').remove(); //tried something like li:child[0], or something but never worked
    $('h4').after('<h4 id="newand">Infinity Guantlet</h4>');
    $('#newand').css("color", "indigo");
    $('#cheese').detach().appendTo('h5'); // send cheese into a secret mission w detach/appendTo
    $('#cheese').detach().appendTo('h4'); // send him back to h4
    $('#cheese').css('color', 'black'); // h4 now is purple... so made him black again

    //======================== Year 6

    $('.secret').delay(2000).hide('slow'); // WOAH THIS IS COOL
    $('.secret').delay(2000).show('slow');
    $('.seaUnicorn').addClass('cabbage');
    $('.seaUnicorn').removeClass('cabbage');

    //======================== Year 7

    $('h5').replaceWith('<h5>Fall 2021</h5>');
    $('ul').prepend('<li>Butter beer (again?)</li>');
    $('ul').attr('storage', 'chest');
})
