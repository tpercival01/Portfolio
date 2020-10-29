$(document).mousemove(function(event) {
    var eye1 = $(".eye1");
    var eye2 = $(".eye2");
    var x = (eye1.offset().left) + (eye1.width() / 2);
    var y = (eye1.offset().top) + (eye1.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye1.css({
        '-webkit-transform': 'rotate(' + rot +'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
    eye2.css({
        '-webkit-transform': 'rotate(' + rot +'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});

document.onmousedown = clickyclicky;
document.onmouseup = clackyclacky;

let eye1 = document.getElementById('eyeOne');
let eye2 = document.getElementById('eyeTwo');

function clickyclicky() {
    eye1.style.backgroundColor = 'black';
    eye2.style.backgroundColor = 'black';
}

function clackyclacky() {
    eye1.style.backgroundColor = 'white';
    eye2.style.backgroundColor = 'white';
}