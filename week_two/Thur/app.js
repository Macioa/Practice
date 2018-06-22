//jquery syntax

console.log("bytag",$('h2'));
console.log("byclass",$('.myclass'));
console.log("byid",$('#myid'));

const $myH2 = $('h2');
$myH2.text('New H2 Text');

const $li = $('<li/>');
$li.text('js generated li');

const $ul = $('ul');
$ul.append($li);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


$('body').css('background-color', getRandomColor());

const $body = $('body');

$body.append('<div id="top-container"></div>');
$body.append('<div id ="bottom-container"></div>');

$('h2').text($('h2')+" with added text");

$body.ready( () => {
    console.log('body is ready');
    const $p = $('<p/>');
    $p.text('text in the paragraph');
    console.log($body);
    $body.append($p);
});

const repeatlog = setInterval( () => console.log('test'), 3000);