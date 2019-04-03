/*
* @Author: admin
* @Date:   2019-01-20 09:14:08
* @Last Modified by:   admin
* @Last Modified time: 2019-01-20 16:03:48
*/

'use strict';

$(function(){



$('body').mousemove(function(event) {
    		// (500,300)
    		var x=event.clientX;
    		var y=event.clientY;
    		 console.log(x)//鼠标X坐标
    		console.log(y)//鼠标Y坐标
    		
    			var xx1=800+(800-x)/60
    			var yy1=275+(275-y)/60
    			$('.sc1').css('left', xx1);
    			$('.sc1').css('top', yy1);
    			var xx2=536+(536-x)/60
    			var yy2=426+(426-y)/60
    			$('.sc2').css('left', xx2);
    			$('.sc2').css('top', yy2);
    			var xx3=159+(159-x)/60
    			var yy3=201+(201-y)/60
    			$('.sc3').css('left', xx3);
    			$('.sc3').css('top', yy3);
    			var xx4=413+(413-x)/60
    			var yy4=70+(70-y)/60
    			$('.sc4').css('left', xx4);
    			$('.sc4').css('top', yy4);

});


$('.ro1').hover(function() {
	$(this).addClass('go1')
	// $('.ro1 .conus').fadeIn(1000)
}, function() {
	$(this).removeClass('go1')
	// $('.ro1 .conus').fadeOut(1000)
});

$('.ro2').hover(function() {
	$(this).addClass('go2')
}, function() {
	$(this).removeClass('go2')
});


















})