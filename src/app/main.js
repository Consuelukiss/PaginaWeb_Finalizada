$(function(){$(".toggle").on("click",function() { if($(".item").hasClass("active")){ $(".item").removeClass("active"); $(this).find("a").html("<i class='fas fa-bars'></i>"); } else { $(".item").addClass("active"); $(this).find("a").html("<i class='fas fa-times'></i>");}});});

$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
