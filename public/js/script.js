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
})

$(window).on('load', function () {
	$('#loader').fadeOut(1000);
});

$(document).ready(function(){
  $(".plus").click(function(){
    var val= $(".product-qty").val();
    val++;
    if(val >= 1){
      $(".product-qty").attr("value", val);
    }
  });
  $(".minus").click(function(){
    var val= $(".product-qty").val();
    val--;
    if(val >= 1){
      $(".product-qty").attr("value", val);
    }
  });
});


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