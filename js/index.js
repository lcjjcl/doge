/*
* @Author: admin
* @Date:   2019-01-17 15:39:18
* @Last Modified by:   admin
* @Last Modified time: 2019-01-22 10:44:40
*/

'use strict';

$(function(){

var mousenum=0;
var timer1;
$('.jiantou').click(function(event) {
	
		// $('.big').animate({'top': '-20%'}, 300)
		// $('.big').animate({'top': '-5%'}, 200)
		$('.big').animate({'top': '-100%'}, 500)
		setTimeout(fun2,500)
		function fun2(){
			
			$('.banner').slideDown(500);
			$('.x')	.show()
			
		}	
		setTimeout(fun3,1000)
		function fun3(){
			$('.x img').addClass('x1')
			$('.head').slideDown(500);

		}
		setTimeout(fun4,1500)
		function fun4(){
			$('.x img')	.addClass('x1')
			$('.head').slideDown(500);
			$('.head img').fadeIn(500)
			$('.head .nav').fadeIn(500)
		}



});



		var bannum=0;
		setInterval(function(){
		bannum++
		if(bannum>3)bannum=0
		$('.banner ul li').eq(bannum).fadeIn(500).siblings('li').fadeOut(500)
		},3000)


setInterval(fun5,1)
function fun5(){
	$('.x').css('top', $('.banner').height()-75);
}

$('.index1').mousewheel(function(e,d){
	$('.big').animate({'top': '-100%'}, 500)
		setTimeout(fun2,500)
		function fun2(){
			
			$('.banner').slideDown(500);
			$('.x')	.show()
			
		}	
		setTimeout(fun3,1000)
		function fun3(){
			$('.x img').addClass('x1')
			$('.head').slideDown(500);

		}
		setTimeout(fun4,1500)
		function fun4(){
			$('.x img')	.addClass('x1')
			$('.head').slideDown(500);
			$('.head img').fadeIn(500)
			$('.head .nav').fadeIn(500)
		}


});

var flag=0;
var timer2;
$('.x').click(function(event) {
	$(this).children('img').toggleClass('x2');
	$('.logintop').toggleClass('logintop3')
	$('.logintop').toggleClass('logintop2')
	$('.login').toggleClass('login2')
	$('.head2').slideToggle(500)
	
	if(flag==0){
		$('.head').hide()
		$('.index2').removeClass('in')
		$('.head3').slideUp(500)
		$('.index2').stop().animate({'top': -$('.banner').height()+100}, 700)
		// $('.index2').css('top', -$('.banner').height()+100);
		clearTimeout(timer2)
		clearTimeout(timer3)
		timer2=setTimeout(function(){
			$('.bg1').stop().fadeIn(500);
		},2000)
	flag=1;
	}else {
		mousenum=0;
		$('.con').stop().animate({'top': -30}, 500)
		clearTimeout(timer2)
		clearTimeout(timer3)
		var timer3=setTimeout(function(){
			$('.index2').stop().animate({'top': 0}, 500)
			// $('.index2').css('top', 0);
			$('.head').slideDown(500)
		},500)		
		$('.bg1').stop().fadeOut(500);
		flag=0;
	}
});


$('.logininput').eq(0).focus(function(event) {
	console.log(1)
	$(this).attr('placeholder', '');
});
$('.logininput').eq(1).focus(function(event) {
	console.log(1)
	$(this).attr('placeholder', '');
	$('.logoeyes').css('background-image', 'url(img/logoeyes.png)');
});
$('.logininput').eq(0).blur(function(event) {
	$(this).attr('placeholder', '用户名');
});
$('.logininput').eq(1).blur(function(event) {
	$(this).attr('placeholder', '密码');
	$('.logoeyes').css('background-image', 'url(img/logo2.png)');
});
var chek=0;
$('#loginauto').click(function(event) {
	if(chek==0){
		$('.yes').css('background-image', 'url(img/222.png)');
		chek=1;
	}else{
		$('.yes').css('background-image', 'url(img/111.png)');
		chek=0;
	}
	
});



$('.index2').mousewheel(function(e,d){
	if(flag==1){
		mousenum=0;
		$('.index2').removeClass('in')
	}else{
		mousenum-=d;
		if(mousenum<0) mousenum=0;
		// if(mousenum==11) {
		// 	$('.index2').css('top', -10*100);
		// }
		$('.index2').addClass('in')
		// $('.index2').stop().animate({'top': -mousenum*100}, 700)
		$('.index2').css('top', -mousenum*100);

		if(mousenum>2){

			$('.head3').slideDown(500)
			$('.head').slideUp(500)
			$('.head img').fadeOut(100)
			$('.head .nav').fadeOut(100)
		}else{

			$('.head3').slideUp(500)
			$('.head').slideDown(500)
			$('.head img').fadeIn(100)
			$('.head .nav').fadeIn(100)
		}
	}

	if(mousenum<5){
		$('.con').stop().animate({'top': mousenum*20-30}, 500)
	}
	if(mousenum>11){
		$('.con').stop().animate({'top': (mousenum-10)*20-30}, 500)
	}
	if(2<mousenum&&mousenum<7){
		$('.list img').addClass('li1img')
		$('.list ul').removeClass('li1ul')
	}else{
		$('.list img').removeClass('li1img')
	}
var top=($('.index2').height());

var top2=-($('.index2').offset().top-856);

console.log(top)
console.log(top2)
	if(top2>top){
		if(d<0){
			mousenum=top/100-7.5;
			$('.con').stop().animate({'top': top/100-7.5}, 100)
		} 
		else ;
		// 
	}
	// if(mousenum>12)mousenum=12
	console.log(mousenum)
});













})