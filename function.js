document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {

        // PRELOADING PAGE
    
        setTimeout(function(){
            window.scrollTo(0,0);
            document.getElementsByTagName('body')[0].className = 'loaded';
        }, 300000000000);

    }
}

// GUEST NAME

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var guestBox = document.querySelectorAll('.guest');
var guest = urlParams.get('guest');
if (guest!=null){
    guestBox.forEach(function(e){
        e.innerHTML = guest;
        e.value = guest;
    })
}

// OPEN INVITATION LETTER BUTTON //

function openLtr(){
    var letter = document.getElementById('letter');
    var cover = document.getElementById('cover');
    var body = document.querySelector('body');
    function scroll(){
        letter.classList.add('slide');
        cover.classList.add('show-cover');
        body.style.overflowY = 'scroll';
    }
    function hide(){
        letter.classList.add('hide');
    }
    setTimeout(scroll, 0);
    setTimeout(hide, 500);
    playAudio();
}

// PARTY COUNT DOWN //

var dDay = new Date("Nov 22, 2022 09:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = dDay - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minute").innerHTML = minutes;
    document.querySelector(".second").innerHTML = seconds;

}, 1000);

// AUDIO CONTROL //

var audio = document.getElementById('audio');
var aBtn = document.getElementById('audio-btn');
var aIcon = document.getElementById('audio-icon');

function playAudio(){
    audio.play();
    aBtn.setAttribute('onclick', 'stopAudio()');
    aIcon.className = "fas fa-music";
}

function stopAudio(){
    audio.pause();
    audio.currentTime = 0;
    aBtn.setAttribute('onclick', 'playAudio()');
    aIcon.className = "fas fa-volume-mute";
}

// Screen 768px and up //
var navbar = document.getElementById('navbar');
document.addEventListener('DOMContentLoaded', function(event) {
	if(window.innerWidth>=992) {
        navbar.classList.remove('list-group-horizontal');
	} else if(window.innerWidth<992) {
        navbar.classList.add('list-group-horizontal');
	}
});

window.addEventListener("resize", function() {
	if(window.innerWidth>=992) {
        navbar.classList.remove('list-group-horizontal');
	} else if(window.innerWidth<992) {
        navbar.classList.add('list-group-horizontal');
	}
});