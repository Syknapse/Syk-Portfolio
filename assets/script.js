$(document).ready();

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

var animatePanel = $('.section3-waypoint-panel');
var animateIt1 = $('.section3-waypoint-left');
var animateIt2 = $('.section3-waypoint-right');


// animatePanel.waypoint(function (){
//   animatePanel.addClass('animate-waypoint animated fadeInUp');
// }, {offset: '50%'});

animateIt1.waypoint(function (){
  animateIt1.addClass('animate-waypoint animated fadeInLeft');
}, {offset: '50%'});

animateIt2.waypoint(function (){
  animateIt2.addClass('animate-waypoint animated fadeInRight');
}, {offset: '73%'});

// var animateIt2 = $('.waypointed2');
// animateIt1.waypoint(function (direction){
//     if (direction == 'down') {
//        animateIt1.addClass('animate-waypoint animated fadeInLeft'); 
//    } else {
//         animateIt1.removeClass('animate-waypoint animated fadeInLeft');
//    }
  
// }, {offset: '50%'});





