//준비핸들러
//셀렉팅
//이벤트구문
$(function(){
const $Download = $('.download')
//메쏘드toggle에대해서 많이 배웠다.
$Download.on('click' , function(evt){
  evt.preventDefault();
  $('.store').toggle(0)
  
})



$('.article_2').find('a').on('click' , function(evt){
  evt.preventDefault();
  alert('어플을 설치해주세요')
})

$('.article_4').find('a').on('click' , function(evt){
  evt.preventDefault();
  alert('어플을 설치해주세요')
})


$('.article_5').find('ul>li').on('click' , function(evt){
  evt.preventDefault();
  alert('어플을 설치해주세요')
})


$('.footer_container').find('a').on('click' , function(evt){
  evt.preventDefault();
})

})