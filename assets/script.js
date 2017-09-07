$(document).ready();

// ****************************** for refactoring ********************
// ********* Section 3 info screen toggle and animation ********** 

$(function() {
    $('.section3-icon1').click(function() {
        $('.section3-info1').toggle().addClass('animated fadeInDown');
        $('.section3-info2, .section3-info3, .section3-info4').hide();
    });                        
});
$(function() {
    $('.section3-icon2').click(function() {
        $('.section3-info2').toggle().addClass('animated fadeInLeft');
        $('.section3-info1, .section3-info3, .section3-info4').hide();
    });                      
});
$(function() {
    $('.section3-icon3').click(function() {
        $('.section3-info3').toggle().addClass('animated fadeInRight');
        $('.section3-info1, .section3-info2, .section3-info4').hide();
    });                        
});
$(function() {
    $('.section3-icon4').click(function() {
        $('.section3-info4').toggle().addClass('animated fadeInUp');
        $('.section3-info1, .section3-info2, .section3-info3').hide();
    });                        
});

// ********* Section 4 info screen toggle and animation ********** 

//about me
$(function() {
    $('.me').click(function() {
        $('.about-info1').toggle().addClass('animated zoomIn');
        $('.about-info2, .about-info3, .about-info4, .about-info5, .about-info6, .about-info7, .about-info8').hide();
    });                        
});
//Gandia
$(function() {
    $('.city-four').click(function() {
        $('.about-info2').toggle().addClass('animated zoomIn');
        $('.about-info1, .about-info3, .about-info4, .about-info5, .about-info6, .about-info7, .about-info8').hide();
    });                        
});
//Madrid
$(function() {
    $('.city-five').click(function() {
        $('.about-info3').toggle().addClass('animated zoomIn');
        $('.about-info1, .about-info2, .about-info4, .about-info5, .about-info6, .about-info7, .about-info8').hide();
    });                        
});
//Granada
$(function() {
    $('.city-six').click(function() {
        $('.about-info4').toggle().addClass('animated zoomIn');
        $('.about-info1, .about-info2, .about-info3, .about-info5, .about-info6, .about-info7, .about-info8').hide();
    });                        
});
//Scarborough
$(function() {
    $('.city-three').click(function() {
        $('.about-info5').toggle().addClass('animated zoomIn');
        $('.about-info1, .about-info2, .about-info3, .about-info4, .about-info6, .about-info7, .about-info8').hide();
    });                        
});
//Bournemouth
$(function() {
    $('.city-two').click(function() {
        $('.about-info6').toggle().addClass('animated zoomIn');
        $('.about-info1, .about-info2, .about-info3, .about-info4, .about-info5, .about-info7, .about-info8').hide();
    });                        
});
//Beirut
$(function() {
    $('.city-one').click(function() {
        $('.about-info7').toggle().addClass('animated zoomIn');
        $('.about-info1, .about-info2, .about-info3, .about-info4, .about-info5, .about-info6, .about-info8').hide();
    });                        
});
//Skills
$(function() {
    $('.skill').click(function() {
        $('.about-info8').toggle().addClass('animated zoomIn');
        $('.about-info1, .about-info2, .about-info3, .about-info4, .about-info5, .about-info6, .about-info7').hide();
    });                        
});


// ********* Waypoints ********** 

var socialLeft = $('.social-waypoint-left');
var socialRight = $('.social-waypoint-right');
var sectionThreeLeft = $('.section3-waypoint-left');
var sectionThreeRight = $('.section3-waypoint-right');

// nav active class
$('#landing').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a').removeClass('active-nav');
    $('#b1').addClass('active-nav');
  }
}, {
  offset: '25%'
});

$('#landing').waypoint(function(direction) {
  if (direction === 'up') {
    $('nav a').removeClass('active-nav');
    $('#b1').addClass('active-nav');
  }
}, {
  offset: '-25%'
});

$('#portfolio').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a').removeClass('active-nav');
    $('#b2').addClass('active-nav');
  }
}, {
  offset: '25%'
});

$('#portfolio').waypoint(function(direction) {
  if (direction === 'up') {
    $('nav a').removeClass('active-nav');
    $('#b2').addClass('active-nav');
  }
}, {
  offset: '-25%'
});

$('#experience').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a').removeClass('active-nav');
    $('#b3').addClass('active-nav');
  }
}, {
  offset: '25%'
});

$('#experience').waypoint(function(direction) {
  if (direction === 'up') {
    $('nav a').removeClass('active-nav');
    $('#b3').addClass('active-nav');
  }
}, {
  offset: '-25%'
});

$('#about').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a').removeClass('active-nav');
    $('#b4').addClass('active-nav');
  }
}, {
  offset: '25%'
});

$('#about').waypoint(function(direction) {
  if (direction === 'up') {
    $('nav a').removeClass('active-nav');
    $('#b4').addClass('active-nav');
  }
}, {
  offset: '-25%'
});

$('#contact').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a').removeClass('active-nav');
    $('#b5').addClass('active-nav');
  }
}, {
  offset: '25%'
});

$('#contact').waypoint(function(direction) {
  if (direction === 'up') {
    $('nav a').removeClass('active-nav');
    $('#b5').addClass('active-nav');
  }
}, {
  offset: '-25%'
});

// section one
socialLeft.waypoint(function (){
  socialLeft.addClass('animate-waypoint animated fadeInLeft');
}, {offset: '50%'});

socialRight.waypoint(function (){
  socialRight.addClass('animate-waypoint animated fadeInRight');
}, {offset: '50%'});


// section three
sectionThreeLeft.waypoint(function (){
  sectionThreeLeft.addClass('animate-waypoint animated fadeInLeft');
}, {offset: '50%'});

sectionThreeRight.waypoint(function (){
  sectionThreeRight.addClass('animate-waypoint animated fadeInRight');
}, {offset: '73%'});

////////// Nav hide show ///////////////////

$(function(){
    $('.nav-btn').on('click', function(){
        $('.nav-menu').toggleClass('open');
    });
});

$(function(){
    $('.sections, #b1, #b2, #b3, #b4, #b5').on('click', function(){
        $('.nav-menu').removeClass('open');
    });
});

// ****************************** ^ for refactoring ^ ********************


////// refactoring ////////

// const icons = document.querySelectorAll('.section3-icons');
// const infos = document.querySelectorAll('section3-info');

// function toggleAndAnimate(){
//     infos.toggle().addClass('animated fadeInDown');
//     infos.forEach(info => info.hide());
//     console.log();
// }
// icons.forEach(icon => icon.addEventListener('click', toggleAndAnimate));

//////////

// var icons = document.querySelectorAll('.section3-icons');
// var infos = document.querySelectorAll('section3-info');

// icons.addEventListener('click', showInfo);

// function showInfo(){
//     infos.style.display = 'block';
// }
// alert('booo');






