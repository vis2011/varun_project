    var tab = document.querySelector(".tab");
      var menu = document.querySelector('.menu');

function toggleMenu() {
  var hamburger = document.querySelector('.hamburger');
  var button_1 = document.querySelector('#hbtn');
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  button_1.classList.toggle('hidden');

   var dots = document.querySelectorAll('.dots');
  dots.forEach(function(dot) {
    dot.classList.toggle('hidden');
  });

     var dots1 = document.querySelectorAll('.dots-1');
  dots1.forEach(function(dot) {
    dot.classList.toggle('hidden');
  });
}

function closeMenu() {
  var menu = document.querySelector('.menu');
  var hamburger = document.querySelector('.hamburger');
  var lines = document.querySelectorAll('.line');
  var button_1 = document.querySelector('#hbtn');
  button_1.classList.remove('hidden');
  hamburger.classList.remove('active')
  menu.classList.remove('active');
  lines.forEach(line => line.classList.remove('active'));

     var dots = document.querySelectorAll('.dots');
  dots.forEach(function(dot) {
    dot.classList.remove('hidden');
  });

     var dots1 = document.querySelectorAll('.dots-1');
  dots1.forEach(function(dot) {
    dot.classList.remove('hidden');
  });
    var button = document.querySelectorAll('.homeButton');
    button.classList.remove('hidden');

}

var nav = document.querySelector(".navbar");

var a1 = document.querySelector(".a1");

var a2 = document.querySelector(".a2");
var a3 = document.querySelector(".a3");
var a4 = document.querySelector(".a4");
var a5 = document.querySelector(".a5");
var a6 = document.querySelector(".a6");

window.addEventListener('scroll' , function () {
    if(this.window.pageYOffset >100){
        nav.classList.add('solid')
        a1.classList.add('solid')
        a2.classList.add('solid')
        a3.classList.add('solid')
        a4.classList.add('solid')
        a5.classList.add('solid')
        a6.classList.add('solid')

    }else{
        nav.classList.remove('solid')
        a1.classList.remove('solid')
        a2.classList.remove('solid')
        a3.classList.remove('solid')
        a4.classList.remove('solid')
        a5.classList.remove('solid')
        a6.classList.remove('solid')
    }
})





