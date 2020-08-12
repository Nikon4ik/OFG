$(document).ready(function(){
	$('.slider').slick();
});

document.querySelector('.menuBar_wrapper').onclick = function(){
	document.querySelector('.menuBar').classList.toggle('menuBar_active');
}

