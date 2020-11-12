var i = j = k = 0;

var projectWord = "Projects";
document.getElementById('divProjects').addEventListener("mouseover", function textAnimationProject(){
    setTimeout(function() {
        if (i < projectWord.length) {
            document.getElementById("Projects").innerHTML += projectWord.charAt(i);
            i++;
            setTimeout(textAnimationProject, 500);
        }
    }, 500);
});

var profileWord = "Profile";
document.getElementById('divProfile').addEventListener("mouseover", function textAnimationProfile() {
    setTimeout(function() {
        if (j < profileWord.length) {
            document.getElementById("Profile").innerHTML += profileWord.charAt(j);
            j++;
            setTimeout(textAnimationProfile, 500);
        }
    }, 500);
});
var socialWord = "Socials";
document.getElementById('divSocials').addEventListener("mouseover", function textAnimationSocial(){
    setTimeout(function() {
        if (k < socialWord.length) {
            document.getElementById("Socials").innerHTML += socialWord.charAt(k);
            k++;
            setTimeout(textAnimationSocial, 500);
        }
    }, 500);
});

$(document).mousemove(function(event) {
    var eye1 = $(".eye1");
    var eye2 = $(".eye2");
    var x = (eye1.offset().left) + (eye1.width() / 2);
    var y = (eye1.offset().top) + (eye1.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * - 1) + 180;
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