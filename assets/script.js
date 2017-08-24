$(document).ready();


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


// ********* Waypoints ********** 

var socialLeft = $('.social-waypoint-left');
var socialRight = $('.social-waypoint-right');
var animatePanel = $('.section3-waypoint-panel');
var sectionThreeLeft = $('.section3-waypoint-left');
var sectionThreeRight = $('.section3-waypoint-right');


// section one
socialLeft.waypoint(function (){
  socialLeft.addClass('animate-waypoint animated fadeInLeft');
}, {offset: '50%'});

socialRight.waypoint(function (){
  socialRight.addClass('animate-waypoint animated fadeInRight');
}, {offset: '50%'});

// animatePanel.waypoint(function (){
//   animatePanel.addClass('animate-waypoint animated fadeInUp');
// }, {offset: '50%'});

// section three
sectionThreeLeft.waypoint(function (){
  sectionThreeLeft.addClass('animate-waypoint animated fadeInLeft');
}, {offset: '50%'});

sectionThreeRight.waypoint(function (){
  sectionThreeRight.addClass('animate-waypoint animated fadeInRight');
}, {offset: '73%'});

// var animateIt2 = $('.waypointed2');
// animateIt1.waypoint(function (direction){
//     if (direction == 'down') {
//        animateIt1.addClass('animate-waypoint animated fadeInLeft'); 
//    } else {
//         animateIt1.removeClass('animate-waypoint animated fadeInLeft');
//    }
  
// }, {offset: '50%'});





