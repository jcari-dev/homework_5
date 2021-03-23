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
    $('ul').append('<li class="seaUnicorn">leash</li>');
    $('ul').append("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>");
    //======================== Year 4
    $('#container').append('<h5>Winter/Spring/Summer 2021</h5>'); // Are we really doing an one liner here...                                             Yup....                                   Woah....                        I promise it's kind of readable...                                Please don't fire me I have a wife (not yet, but in July!) and three kids (it's actually one cactus)
    $('#container').append('<table><tr><th>Day</th><th>Classes</th><tr><td>Monday</td><td>None</td></tr><tr><td>Tuesday</td><td>SEI302</td></tr><tr><td>Wednesday</td><td>SEI302</td></tr><tr><td>Thursday</td><td>SEI302 Outcomes</td></tr><tr><td>Friday</td><td>None</td></tr><tr><td>Saturday</td><td>SEI302</td></tr><tr><td>Sunday</td><td>None</td></tr>')
    // in all seriousness, im sorry I am aware that this is prob not good practice, I'm sorry!

    //======================== Year 5
})