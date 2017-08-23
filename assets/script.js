$(document).ready();

$(function() {
    $('.icon1-s2').click(function() {
        $('.info1-s2').toggle();
    });                        
});
$(function() {
    $('.icon2-s2').click(function() {
        $('.info2-s2').toggle();
        $('.info2-s2').addClass('animated fadeInUp');
    });                      
});
$(function() {
    $('.icon3-s2').click(function() {
        $('.info3-s2').toggle();
    });                        
});
$(function() {
    $('.icon4-s2').click(function() {
        $('.info4-s2').toggle();
    });                        
});

var animateIt1 = $('.waypointed1');
var animateIt2 = $('.waypointed2');

animateIt1.waypoint(function (direction){
    if (direction == 'down') {
       animateIt1.addClass('animate-waypoint'); 
   } else {
        animateIt1.removeClass('animate-waypoint');
   }
  
}, {offset: '50%'});



animateIt2.waypoint(function (){
  animateIt2.addClass('animate-waypoint');
}, {offset: '50%'});