$(document).ready();

// ********* Section 3 info screen toggle and animation ********** 

$('.exp-icons').click(function(){
  var infoPanel = '.exp-info-' + $(this).data('info');
  $('.exp-info').not(infoPanel).hide();
  $(infoPanel).toggle();

  if($(this).data('info') === 'programming' ){
    $(infoPanel).addClass('animated fadeInDown');
  } else if($(this).data('info') === 'music' ) {
    $(infoPanel).addClass('animated fadeInLeft');
  } else if($(this).data('info') === 'teaching' ) {
    $(infoPanel).addClass('animated fadeInRight');
  } else if($(this).data('info') === 'idea' ) {
    $(infoPanel).addClass('animated fadeInUp');
  }
});

// ********* Section 4 info screen toggle and animation ********** 

$('.story-icon').click(function(){
  var storyPanel = '.story-' + $(this).data('story');
  $('.stories').not(storyPanel).hide();
  $(storyPanel).toggle().addClass('animated zoomIn');
});


// ****************************** for refactoring ********************
// ********* Waypoints ********** 

var socialLeft = $('.social-waypoint-left');
var socialRight = $('.social-waypoint-right');
var sectionThreeLeft = $('.section3-waypoint-left');
var sectionThreeRight = $('.section3-waypoint-right');

// nav active class

// var section = $('#landing'), $('#portfolio') ...
// var navButton = $('#b1'), $('#b2') ...

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






