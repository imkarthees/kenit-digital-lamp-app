

function toggleMute() {
    var button = document.getElementById("MuteButton");
    var video = document.getElementById("aud");


    if (video.muted) {

        video.muted = false;
    } else {
        video.muted = true;

    }

    button.classList.toggle('muted');
}

let one = document.getElementById("one");
let two = document.getElementById("two");
let third = document.getElementById("third");
let four = document.getElementById("four");
let five = document.getElementById("five");

var oneFire = document.querySelector(".oneFire");
var secondFire = document.querySelector(".secondFire");
var thirdFire = document.querySelector(".thirdFire");
var fourFire = document.querySelector(".fourFire");
var fiveFire = document.querySelector(".fiveFire");

function oneF() {
    one.style.display = "block";
    oneFire.style.display = "none";
    secondFire.style.display = "block";
}

function twoF() {
    secondFire.style.display = "none";
    two.style.display = "block";
    thirdFire.style.display = "block";
}

function thirdF() {
    thirdFire.style.display = "none";
    third.style.display = "block";
    fourFire.style.display = "block";
}

function fourF() {
    fourFire.style.display = "none";
    four.style.display = "block";
    fiveFire.style.display = "block";
}

function fiveF() {
    fiveFire.style.display = "none";
    five.style.display = "block";
}
