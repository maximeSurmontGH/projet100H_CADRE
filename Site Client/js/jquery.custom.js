$(document).ready(function() {

////////// Gallery Sorting //////////
var $filterType = $('#filterOptions li.active a').attr('class');
var $holder = $('ul.holder');
var $data = $holder.clone();

$('#filterOptions li a').click(function(e) {

	$('#filterOptions li').removeClass('active');

	var $filterType = $(this).attr('class');
	$(this).parent().addClass('active');

	if ($filterType == 'all') {
		var $filteredData = $data.find('li');
	}
	else {
		var $filteredData = $data.find('li[data-type~=' + $filterType + ']');
	}

	// call quicksand
	$holder.quicksand($filteredData, {
		duration: 800,
		easing: 'easeInOutQuad'
		},
		function() {
			callprettyPhoto();
			galleryHover();
	});
	return false;
});


////////// Function for gallery rollovers //////////
galleryHover();
function galleryHover() {
	$('.gallery-item').hover(function(){
			$(this).find('.gallery-hover-3col, .gallery-hover-4col, .gallery-hover-6col, .gallery-hover-4col-cir').stop('true','true').fadeTo("normal",1);
	},
		function(){
			$(this).find('.gallery-hover-3col, .gallery-hover-4col, .gallery-hover-6col, .gallery-hover-4col-cir').stop('true','true').fadeTo("normal",0);
	});
}


////////// CSS Fix //////////
 $(".post-list li:first-child").css("padding-top", "0px");
 $(".page-sidebar h5:first, .page-left-sidebar h5:first, .page-right-sidebar h5:first").css("margin-top", "0px");
 $('h5.title-bg').has('button').css("padding-bottom", "12px");

////////// prettyPhoto //////////
callprettyPhoto();
function callprettyPhoto() {
	// Work around for PrettyPhoto HTML Validation //
	$('.gallery-icons a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});

	$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false, deeplinking: false });
}

////////// Back to Top //////////
	$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

}); // End document.ready
