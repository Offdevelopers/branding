//WOW Scroll Custom JS
wow = new WOW(
{
	animateClass: 'animated',
	offset:       100
});
wow.init();

$(document).ready(function() {
  var owl = $("#award-owl");
  owl.owlCarousel({
	autoPlay: true,
    navigation : true,
	singleItem : true,
    transitionStyle : "fade"
  });

  var owl1 = $("#we-believe-rgt");
  owl1.owlCarousel({
	autoPlay: true,
	animateOut: 'fadeOut',
    navigation : true,
	pagination: false,
	singleItem : true,
    transitionStyle : "fade"
  });

  var owl2 = $("#buildslider");
  owl2.owlCarousel({
	autoPlay: true,
    navigation : false,
    dots: true,
	singleItem : true,
    transitionStyle : "fade"
  });

  $("#resultsslider").owlCarousel({
      slideSpeed:300,
      autoPlay: 4000,
      items : 2,
	  loop:true,
	  navigation : true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
      transitionStyle: "fade"

  });
});

/*responsive toggle*/

$(window).resize(function(){
    var screen_width = $( window ).width();
	if(screen_width > 767) {
 	  $("nav").show();

	}
});



$(document).ready(function() {
 $(".navbar-toggle").click(function(){
     $(".navbar-toggle").toggleClass("navbar-close");
     $('nav').toggle("slide", { direction: "right" }, 200);
   //$("nav").slideToggle(200);
   $(".nav-overlay").toggle();



      if($('body').hasClass('nav-open'))
        $('body').removeClass('nav-open');
      else
        $('body').addClass('nav-open');

 });

 $(".navbar-close").click(function () {

     if ($(".navbar-toggle").hasClass('navbar-close')) {
         $(".navbar-toggle").click();
     }
 });


  if($( window ).width() < 768) {

  $('#ulmenu li').each(function()
  {
    //$(this).find('ul').length;
      if($(this).find('ul').length > 0)
      {
        $(this).find('a').append('<span class="arrow"></span>');

         $(this).click(function(){

            $(this).find('ul').slideToggle();

            if($(this).hasClass('active')){

              $(this).removeClass('active');

            }
             else{
                $(this).addClass('active');
              }

           });




      }
  });

  $('#ulmenu li >ul li').find('a[href="'+window.location.pathname+'"]').closest('li').addClass('active');

  }


});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("header").addClass("header-fixed");
    } else {
        $("header").removeClass("header-fixed");
    }
});

/*custome select box*/
$(document).ready(function(){
	$(".custom-select-box").append('<span></span>');
	$(".custom-select-box").each(function()
	{
		$(this).find('span').text($(this).find("select option:selected").text());
	});
	$(document).on('change','.custom-select-box select',function(){
		$selected_val=($(this).val());
		$(this).closest('.custom-select-box').find('span').text($(this).closest('.custom-select-box').find("select option:selected").text());
	});

	$(".custom-select-box select").change(function(){
	$(this).parent().addClass("test");
	});

});


