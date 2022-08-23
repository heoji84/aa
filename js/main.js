$(document).ready(function() {
	$('main').pagepiling();	
	//파이
	const bcolor = ['#e44d26','#29a7de','#f89b28','#0169ae','#111b73','#e5910e']
	$('.main_skill li').each(function(i) {	
		$(this).easyPieChart({
			trackColor : '#dedede',
			barColor : bcolor[i],
			size : 250,
			lineWidth : 30,
			lineCap : 'butt',
			animate : 1000
		});
	})
	//#e44d26, #29a7de, #63a614, #f89b28, #feca41, #0169ae, #111b73, #e5910e
	$('#graphic2 ul').masonry({
		itemSelector: '#graphic2 li',
		//columnWidth: 200
		fitWidth : true
	});
	$('#coding ul').slick({
		slidesToShow: 3,
		slidesToscroll : 3, //슬라이드시 한번에 3장 가게
		autoplay : true,
		autoplaySpeed : 1000,
		dots : true
	});
	lightbox.option({
      disableScrolling : true,
		fitImagesInViewport : false,
		wrapAround : true
      
})

});//ready

//lightbox옵션 수정
