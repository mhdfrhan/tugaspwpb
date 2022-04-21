$(document).ready(function () {
	$('#search-btn').click(function () {
		$('#search-overlay').fadeToggle()
	})
	$('#close-overlay').click(function () {
		$('#search-overlay').fadeOut()
	})
	$('body').hide().fadeIn(200);
	$(".newpage").click(function (e) {
		e.preventDefault();
		$link = $(this).attr("href");
		$("body").fadeOut(200, function () {
			window.location = $link;
		});
	});
	$('nav .dropdown').hover(function(){
		$('#backdrop').toggleClass('active')
	})
	$('.arrow-collapse').click(function(){
		$(this).toggleClass('rotate-180')
	})
})

$(window).on('load', function () {
	$('#loader').fadeOut(1000);
});

$(document).ready(function() {
  $('.quantity .flex-col div').click(function () {
      var $input = $(this).parents('.quantity').find('.product-qty');
    if($(this).hasClass('minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass('disabled');
      }
      else {
        $(this).removeClass('disabled');
      }
      $input.val(count);
    }
    else {
      var count = parseFloat($input.val()) + 1
      $input.val(count);
      if (count > 1) {
        $(this).parents('.quantity').find(('.minus')).removeClass('disabled');
      }
    }
    
    $input.change();
    return false;
  });
  
});
// product +/-


document.addEventListener("DOMContentLoaded", function () {

	window.addEventListener('scroll', function () {

		if (window.scrollY > 200) {
			document.getElementById('navbar_top').classList.add('fixedtop');
			navbar_height = document.querySelector('.navbar').offsetHeight;
			document.body.style.paddingTop = navbar_height + 'px';
		} else {
			document.getElementById('navbar_top').classList.remove('fixedtop');
			document.body.style.paddingTop = '0';
		}
	});
});
// DOMContentLoaded  end