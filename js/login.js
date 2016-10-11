/**
 * Created by qingyun on 16/9/26.
 */
$(".nav-deng").hide();
$(".zhu").css({'color':'#a4100e'});
$(".nav-slider-deng").hide();



$(".deng").on('click',function () {
 $(".nav-zhu").hide();
 $(".nav-deng").show();
 $(".deng").css({'color':'#a4100e'});
 $(".zhu").css({'color':'#79767c'});
 $(".nav-slider-zhu").hide();
 $(".nav-slider-deng").show();
 
 
});

$(".zhu").on('click',function () {
 $(".nav-deng ").hide();
 $(".nav-zhu").show();
 $(".zhu").css({'color':'#a4100e'});
 $(".deng").css({'color':'#79767c'});
 $(".nav-slider-deng").hide();
 $(".nav-slider-zhu").show();


});



