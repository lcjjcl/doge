/*
* @Author: admin
* @Date:   2019-01-21 09:12:55
* @Last Modified by:   admin
* @Last Modified time: 2019-01-22 10:42:16
*/

'use strict';

$(function(){
/*上菜单控制左菜单*/
$('.top .text ul li').eq(0).addClass('click1')
$('.top .text ul li').click(function(event) {
	var x=$(this).index()
	$(this).addClass('click1').siblings().removeClass('click1')
	$('.main .left ul').eq(x).show().siblings().hide();
	
});
/*上菜单控制右主页*/
$('.top .text ul li').eq(0).click(function(event) {
	$('.right-1').show();
	$('.right-2').hide();
	$('.right-3').hide();
});
$('.top .text ul li').eq(1).click(function(event) {
	$('.right-1').hide();
	$('.right-2').show();
	$('.right-3').hide();
});
$('.top .text ul li').eq(2).click(function(event) {
	$('.right-1').hide();
	$('.right-2').hide();
	$('.right-3').show();
});
/*左菜单控制右主页*/
/*我的信息*/
$('.left').children('ul').eq(0).children('li').eq(0).click(function(event) {
	$('.one1').show().siblings().hide()
	

});
$('.left').children('ul').eq(0).children('li').eq(1).click(function(event) {
	$('.one2').show().siblings().hide()

});
$('.left').children('ul').eq(0).children('li').eq(2).click(function(event) {
	$('.one3').show().siblings().hide()

});
/*宠物服务*/
$('.left').children('ul').eq(1).children('li').eq(0).click(function(event) {
	$('.two1').show().siblings().hide()

});
$('.left').children('ul').eq(1).children('li').eq(1).click(function(event) {
	$('.two2').show().siblings().hide()

});
$('.left').children('ul').eq(1).children('li').eq(2).click(function(event) {
	$('.two3').show().siblings().hide()

});
/*宠物社区*/
$('.left').children('ul').eq(2).children('li').eq(0).click(function(event) {
	$('.thr1').show().siblings().hide()

});
$('.left').children('ul').eq(2).children('li').eq(1).click(function(event) {
	$('.thr2').show().siblings().hide()

});
$('.left').children('ul').eq(2).children('li').eq(2).click(function(event) {
	$('.thr3').show().siblings().hide()

});
/*搜索框的焦点事件*/
$('.top .text .search .input1').focus(function(event) {
	$(this).attr('placeholder', '');
});
$('.top .text .search .input1').blur(function(event) {
	$(this).attr('placeholder', '用户名 / 关键词 / 资讯');
});
/*上、左菜单的点击、移入效果*/
$('.main .left ul li').eq(0).addClass('click2');
$('.main .left ul li').eq(3).addClass('click2');
$('.main .left ul li').eq(6).addClass('click2');
$('.main .left ul li').click(function(event) {
	$(this).addClass('click2').siblings().removeClass('click2')
});



/*一些小按钮的实现*/

/*修改信息*/
$('.xiugai').click(function(event) {
	$('.xg').show()
});
/*统一的关闭按钮*/
$('.close').click(function(event) {
	$(this).parent().parent().parent().hide()
});
$('.xg button').click(function(event) {
	alert('功能未开放，修改失败')
});

/*修改头像*/

$('.xiugaitx').click(function(event) {
	$('.xg2').show()
});
$('.xg2 button').click(function(event) {
	alert('功能未开放，修改失败')
});
/*充值*/
$('.chongzhi button').click(function(event) {
	alert('功能未开放')
});
/*更换手机、邮箱等*/
$('.mibao').click(function(event) {
	$('.xg3').show()
});

$('.aaa').click(function(event) {
	alert('功能未开放')
});

/*删除订单*/
$('.two2 ul li button').click(function(event) {
	$(this).parent().hide()
});
/*点击已读*/
$('.two3 ul li').click(function(event) {
	console.log(1)
	$(this).children('p').css('color', '#999');

});
/*转发*/
$('.zhuanfa').click(function(event) {
	alert('转发失败')
});
/*点赞*/

$('.dianzan').click(function(event) {
	$(this).toggleClass('dianzan2');
	
});
/*徽章：没有更多了*/
$('.huizhang span').click(function(event) {
	alert('没有更多了')
});

/*发表说说*/

$('.fabiao button').click(function(event) {
	var aa=$('.fabiao textarea').val()
	if(aa==''){
		alert('发表内容不能为空哦！');
	}else{
		 var bb='<li><div style="overflow:hidden;"><div class="d1"><img src="img/bt6.jpg" alt="" style="width:100%;height:100%;margin:0px 0px;"></div><div class="d2"><h1>可爱小朋友</h1><p>'+aa+'</p></div></div><div class="d3"><div style="float: right;"><span class="dianzan"></span><span><img src="img/pinglun.png" alt=""></span><span class="zhuanfa"><img src="img/zhuanfa.png" alt=""></span></div></div></li>'
		 bb=$(bb)
		 bb.prependTo('.thr1 ul')
		 $('.fabiao textarea').val("");
	}
	
});
$('.thr3 button').click(function(event) {
	alert('功能未开放')
});






})