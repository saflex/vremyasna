jQuery('#nt-accord .panel-heading a[data-toggle="collapse"]').on('click', function () {   
    jQuery('#nt-accord .panel-heading a[data-toggle="collapse"]').removeClass('actives');
    $(this).addClass('actives');
 });

$(function(){
    $('.z1').click(function(){
       $('.zz1').slideToggle();
        $('.for-z1').addClass( "hover-ps" );
        $('.zz2').css('display', 'none');
        $('.zz3').css('display', 'none');
        $('.zz4').css('display', 'none');
        $('.zz5').css('display', 'none');
         $('.zz6').css('display', 'none');
        $('.for-z1').removeClass( "unhover-ps" );
        $('.for-z2').addClass( "unhover-ps" );
        $('.for-z3').addClass( "unhover-ps" );
        $('.for-z4').addClass( "unhover-ps" );
        $('.for-z5').addClass( "unhover-ps" );
        $('.for-z6').addClass( "unhover-ps" );
    });


});


$(function(){
    $('.z2').click(function(){
       $('.zz2').slideToggle();
        $('.for-z2').addClass( "hover-ps" );
     $('.zz1').css('display', 'none');
        $('.zz3').css('display', 'none');
        $('.zz4').css('display', 'none');
        $('.zz5').css('display', 'none');
         $('.zz6').css('display', 'none');
        $('.for-z2').removeClass( "unhover-ps" );
        $('.for-z1').addClass( "unhover-ps" );
        $('.for-z3').addClass( "unhover-ps" );
        $('.for-z4').addClass( "unhover-ps" );
        $('.for-z5').addClass( "unhover-ps" );
        $('.for-z6').addClass( "unhover-ps" );
    });
});

$(function(){
    $('.z3').click(function(){
       $('.zz3').slideToggle();
        $('.for-z3').addClass( "hover-ps" );
        $('.zz1').css('display', 'none');
        $('.zz2').css('display', 'none');
        $('.zz4').css('display', 'none');
        $('.zz5').css('display', 'none');
         $('.zz6').css('display', 'none');
        $('.for-z3').removeClass( "unhover-ps" );
        $('.for-z1').addClass( "unhover-ps" );
        $('.for-z2').addClass( "unhover-ps" );
        $('.for-z4').addClass( "unhover-ps" );
        $('.for-z5').addClass( "unhover-ps" );
        $('.for-z6').addClass( "unhover-ps" );

    });
});

$(function(){
    $('.z4').click(function(){
       $('.zz4').slideToggle();
        $('.for-z4').addClass( "hover-ps" );
        $('.zz1').css('display', 'none');
        $('.zz2').css('display', 'none');
        $('.zz3').css('display', 'none');
        $('.zz5').css('display', 'none');
         $('.zz6').css('display', 'none');
        $('.for-z4').removeClass( "unhover-ps" );
        $('.for-z1').addClass( "unhover-ps" );
        $('.for-z2').addClass( "unhover-ps" );
        $('.for-z3').addClass( "unhover-ps" );
        $('.for-z5').addClass( "unhover-ps" );
        $('.for-z6').addClass( "unhover-ps" );

    });
});

$(function(){
    $('.z5').click(function(){
       $('.zz5').slideToggle();
        $('.for-z5').addClass( "hover-ps" );
        $('.zz1').css('display', 'none');
        $('.zz2').css('display', 'none');
        $('.zz3').css('display', 'none');
        $('.zz4').css('display', 'none');
        $('.zz6').css('display', 'none');
        $('.for-z5').removeClass( "unhover-ps" );
        $('.for-z1').addClass( "unhover-ps" );
        $('.for-z2').addClass( "unhover-ps" );
        $('.for-z3').addClass( "unhover-ps" );
        $('.for-z4').addClass( "unhover-ps" );
        $('.for-z6').addClass( "unhover-ps" );

    });
});

$(function(){
    $('.z6').click(function(){
       $('.zz6').slideToggle();
        $('.for-z6').addClass( "hover-ps" );
        $('.zz1').css('display', 'none');
        $('.zz2').css('display', 'none');
        $('.zz3').css('display', 'none');
        $('.zz4').css('display', 'none');
        $('.zz5').css('display', 'none');
        $('.for-z6').removeClass( "unhover-ps" );
        $('.for-z1').addClass( "unhover-ps" );
        $('.for-z2').addClass( "unhover-ps" );
        $('.for-z3').addClass( "unhover-ps" );
        $('.for-z4').addClass( "unhover-ps" );
        $('.for-z5').addClass( "unhover-ps" );

    });
});



 /*

$('.add-to-cart').on('click', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parent('.item').find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '160px',
                    'width': '212px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });


*/

jQuery('.param-tr').click(function() { 
     jQuery('.open-blk').slideToggle(''); 
     jQuery('.param-tr').toggleClass("str-no");  
});





jQuery(document).ready(function(){


/* слайдер цен */

jQuery("#slider").slider({
  min: 0,
  max: 900000,
  values: [0,900000],
  range: true,
  stop: function(event, ui) {
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    
    },
    slide: function(event, ui){
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    jQuery("input#minCost").val(value1);
  }
  jQuery("#slider").slider("values",0,value1);  
});

  
jQuery("input#maxCost").change(function(){
    
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();
  
  if (value2 > 900000) { value2 = 900000; jQuery("input#maxCost").val(900000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    jQuery("input#maxCost").val(value2);
  }
  jQuery("#slider").slider("values",1,value2);
});




});



$('#accordion').on('hidden.bs.collapse', function () {
//do something...
})

$('#accordion .accordion-toggle').click(function (e){
  var chevState = $(e.target).siblings("i.indicator").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
  $("i.indicator").not(chevState).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
});



$('#nt-accord').on('hidden.bs.collapse', function () {
//do something...
})

$('#nt-accord .accordion-toggle2').click(function (e){
  var chevState2 = $(e.target).siblings("i.indicator").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
  $("i.indicator").not(chevState2).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
});



 $(document).ready(function(){
        // прячем кнопку #back-top
        $("#back-top").hide();

        // появление/затухание кнопки #back-top
        $(function (){
            $(window).scroll(function (){
                if ($(this).scrollTop() > 300){
                    $('#back-top').fadeIn();
                } else{
                    $('#back-top').fadeOut();
                }
            });

            // при клике на ссылку плавно поднимаемся вверх
            $('#back-top a').click(function (){
                $('body,html').animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
    });


 $(document).ready(function(){
        {
            // handle the mouseenter functionality
            $(".img").mouseenter(function(){
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
        }
    });




$(document).ready(function() {
    $("#datepicker").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });


  jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Назад',
		nextText: 'Далее',

		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],

	  monthNamesShort: [ "Январь", "Феваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],

		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});			
	
   

  
  $('.multiple-colors').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
          focusOnSelect: true
    });

  
  
  
if($(window).width() > 1199) { 



$(".colors").hover(
  function () {
     $(this).toggleClass("results_hover");
     
  }
);





} else { 
    // change functionality for larger screens
}
  
  
  
if($(window).width() > 991) { 

$(".nbrs").hover(
  function () {
    $(this).toggleClass("result_hover");
  }
);



} else { 
    // change functionality for larger screens
}


  if($(window).width() > 991) { 

$(".color-pks").hover(
  function () {
    $(this).toggleClass("result_hover_p");
  }
);


} else { 
    // change functionality for larger screens
}




     if($(window).width() > 767) { 
jQuery('ul.nav > li').hover(function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
}, function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
})
} else { 
    // change functionality for larger screens
}


 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

$('.language-select').click(function(){
$(this).toggleClass('open');
})

$('.language-select li').click(function(){
var setLang = $('.language-select').data('location'),
    dataLangSelect = $(this).data('lang')
      $('.language-select').data('location', dataLangSelect);
      $('.language-select li').removeClass('active');
      $(this).toggleClass('active');
})



  $(".pre-table-scroll").mCustomScrollbar({
          axis:"x",
            autoDraggerLength:false,
          advanced:{
            autoExpandHorizontalScroll:true
          }
        });



  $(".scroller-x").mCustomScrollbar({
          axis:"x",
            autoDraggerLength:false,
          advanced:{
            autoExpandHorizontalScroll:true
          }
        });



  $(".scroller-a").mCustomScrollbar({
          axis:"y",
        
          autoDraggerLength:false,
        
        }); 

	$(".scroller-b").mCustomScrollbar({
					axis:"y",
				
					autoDraggerLength:false,
				
				});	



  $(".scroller-bs").mCustomScrollbar({
          axis:"y",
        
          autoDraggerLength:false,
        
        }); 


				
				
				$(".scroller-b2").mCustomScrollbar({
					axis:"y",
					autoDraggerLength:false,
				});	



	$(".scroller-i").mCustomScrollbar({
					axis:"y",
					advanced:{
						autoDraggerLength:true
					}
				});	




$("textarea[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);

    $(this).bind("focus", function () {
        this.placeholder = '';
    });
    $(this).bind("blur", function () {
        this.placeholder = $(this).attr("data-placeholder");
    });
});

$(document).ready(function () { 
	
	 $('.add-to-carts').on('click', function () {
	    var cart = $('#shopping-cart');
	    var imgtodrag = $("#to-cart-img").eq(0);
	    if (imgtodrag) {
	        var imgclone = imgtodrag.clone()
	            .offset({
	            top: imgtodrag.offset().top,
	            left: imgtodrag.offset().left
	        })
	            .css({
	            'opacity': '0.5',
	                'position': 'absolute',
	                'height': '402px',
	                'width': '402px',
	                'z-index': '9999',
	                'top': '196px'
	        })
	            .appendTo($('#product-modal'))
	            .animate({
	            	'top': "130px",
	                'left': cart.offset().left + 10,
	                'width': 75,
	                'height': 75
	        }, 1000, 'easeInOutExpo');
	 
	        
	 
	            imgclone.animate({
	                'width': 0,
	                'height': 0
	        }, function () {
	            $(this).detach()
	        });
	    }
	});
});



$(document).ready(function () { 
	
	 $('.add-to-cartsy').on('click', function () {
	    var cart = $('#shopping-carty');
	    var imgtodrag = $("#to-cart-img2").eq(0);
	    if (imgtodrag) {
	        var imgclone = imgtodrag.clone()
	            .offset({
	            top: imgtodrag.offset().top,
	            left: imgtodrag.offset().left
	        })
	            .css({
	            'opacity': '0.5',
	                'position': 'absolute',
	                'height': '80px',
	                'width': '80px',
	                'z-index': '9999',
	                'top': '181px'
	        })
	            .appendTo($('#modal-shop-fast'))
	            .animate({
	            	'top': "20px",
	                'left': cart.offset().left + 10,
	                'width': 75,
	                'height': 75
	        }, 1000, 'easeInOutExpo');
	 
	        
	 
	            imgclone.animate({
	                'width': 0,
	                'height': 0
	        }, function () {
	            $(this).detach()
	        });
	    }
	});
});



/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});





$('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 1,
  slideWidth: 1000,
  slideMargin: 10
});




$('.bxslider2').bxSlider({
  pagerCustom: '#bx-pager'
});



$(function(){
    $('.modal-zoom').click(function(){
        $('.box-modal-container').addClass( "arrowss" );
         $('.box-modal-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.close-modal').click(function(){
        $('.box-modal-container').addClass( "arrows-no" );
        $('.box-modal-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});


$(function(){
    $('.image-fly2').click(function(){
        $('.box-modal-container').addClass( "arrowss" );
         $('.box-modal-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});



$(function(){
    $('.a-clicks').click(function(){
        $('.modal-body').addClass( "spda" );
         $('.modal-body').removeClass('spda');
         
           $('html').css("overflow", "hidden");
    });
});





$(function(){

$('.dblb').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#hoverblock').offset().top }, 700);
  e.preventDefault();
});

});


$(function(){

$('.carst-scroll').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#myTabs-scroll').offset().top }, 700);
  e.preventDefault();
});

});






 function displ(ddd) { if (document.getElementById(ddd).style.display == 'none') {document.getElementById(ddd).style.display = 'block'} else {document.getElementById(ddd).style.display = 'none'} }






(function($) {
    $(function() {
      $('input, select').styler({
        selectSearch: true
      });
    });
    })(jQuery);


$(document).ready(function(){
  
   
  $(".show-more").on("click", function() {
    $(this).parent(".show-more-box").find(".show-more-block").css("height", "auto");
    $(this).hide();
  });
  
  $(".fancy-btn").fancybox();
  
  $(".selectbox").styler();

  $(".smooth-scroll").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
  });
  
  
  $('#two').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#two]").parent("li").addClass("active"); } else { 
      $("[href=#two]").parent("li").removeClass("active"); }});
      
  $('#three').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#three]").parent("li").addClass("active"); } else { 
      $("[href=#three]").parent("li").removeClass("active"); }});
          
  $('#four').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#four]").parent("li").addClass("active"); } else { 
      $("[href=#four]").parent("li").removeClass("active"); }});
          
  $('#five').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#five]").parent("li").addClass("active"); } else { 
      $("[href=#five]").parent("li").removeClass("active"); }});
          
  $('#six').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#six]").parent("li").addClass("active"); } else { 
      $("[href=#six]").parent("li").removeClass("active"); }});
          
  $('#seven').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#seven]").parent("li").addClass("active"); } else { 
      $("[href=#seven]").parent("li").removeClass("active"); }});
      
          
  $('#eight').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#eight]").parent("li").addClass("active"); } else { 
      $("[href=#eight]").parent("li").removeClass("active"); }});
          

  $('#nine').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#nine]").parent("li").addClass("active"); } else { 
      $("[href=#nine]").parent("li").removeClass("active"); }});
          
  
});



$(function(){

$('.nbtn').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#nine').offset().top }, 700);
  e.preventDefault();
});

});


$(function(){

$('.dbl').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#hoverblock').offset().top }, 700);
  e.preventDefault();
});

});







$(function(){

$('.vsmodels').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#three').offset().top }, 700);
  e.preventDefault();
});

});



window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 140) {
    $(".fixed-nav").show();
  } else {
    $(".fixed-nav").hide();
  }
};    
  


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
  

 $(function() {
    $( ".tool" ).tooltip({
      position: {
    my: "top left",
        at: "top-25",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });




$(function(){
    $('.nnn').click(function(){
        $('.swiper-container').addClass( "arrowss" );
         $('.swiper-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.closer').click(function(){
        $('.swiper-container').addClass( "arrows-no" );
        $('.swiper-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});



$(function(){
    $('.closer').click(function(){
        $('.swiper-container3').addClass( "arrows-no" );
        $('.swiper-container3').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});




$(function(){
    $('#menu').hover(function(){
        $('.arrow-fxq').hide();
    });
});






$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });





    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });



    $('.responsive2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, 

{
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, 
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


});



$(document).ready(function() {
     $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
                centerMode: false,
    });
});





$(document).ready(function() {
    $('.single-item-big').slick({
        dots: true,
         arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });
});

$(document).ready(function() {
    $('.single-item-scroll').slick({
        dots: false,
         arrows: true,
           fade: true,
           adaptiveHeight: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });
});



$(document).ready(function() {
    $('.single-item2').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });
});







$(function(){
  $('.thumbnails a').click(function(){                                 // При нажатиина миниатюру
    var images = $(this).find('img');
    var imgSrc = images.attr('src');
 
    $(".big-image img").attr({ src: imgSrc });                         // Подменяем адрес большого изображения на адрес выбранного
    $(this).siblings('a').removeClass('active');                       // Удаляем класс .active со ссылки чтоб убрать рамку
    images.parent().addClass('active');                                // Добавляем класс .active на выбранную миниатюру
    return false;
  });
 
  $('.next').click(function(){                                         // При нажатии на кнопку "вперед"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var nextSrc;
 
    if (count != n){                                                   // - Если изображение не последнее
      nextSrc = activeImg.next().find('img').attr('src');              // В переменную записывается адрес следующего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      activeImg.next().addClass('active');                             // На миниатюру следующего изображения вешается класс .active
    }else{                                                             // - Если текущее изображение последнее в списке
      nextSrc = $('.thumbnails a').first().find('img').attr('src');    // В переменную записывается адрес первого изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a').first().addClass('active');                   // На первую миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: nextSrc });                        // Подменяем адрес большого изображения на адрес следующего
    return false;
  });
 
 
  $('.prev').click(function(){                                         // При нажатии на кнопку "назад"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var prevSrc;
 
    if (n != 1){                                                       // - Если текущее изображение не первое
      prevSrc = activeImg.prev().find('img').attr('src');              // В переменную записывается адрес предыдущего изображения           
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active активной до этого миниатюры
      activeImg.prev().addClass('active');                             // На миниатюру изображения слева вешается класс .active
    }else{                                                             // - Если текущее изображение первое
      prevSrc = $('.thumbnails a:last').find('img').attr('src');       // В переменную записывается адрес последнего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a:last').addClass('active');                      // На последнюю миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: prevSrc });                        // Подменяется адрес большого изображения на адрес следующего
    return false;
  });
})



  
 


 $(document).ready(function() {

    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    });







  if($(window).width() > 991) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}





  if($(window).width() < 510) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}



  if($(window).width() < 768) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}

  if($(window).width() < 992) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}







	
    $('.multiple-items2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    });

	


    $('.s-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    
    
   

}); 


     $(document).ready(function () {

            //main nav
            $(window).on('scroll load', function () {
                updateMainNav();
            });

            function updateMainNav() {
                if ($(window).scrollTop() >= 153) {
                    $('body').addClass('minimize-menus');
                } else {
                    $('body').removeClass('minimize-menus');
                }
            }

            $('.user-nav > a').on('click', function () {
                $('body').toggleClass('show-user-nav');
            });

            $(document).on('click', function (event) {
                $('body').removeClass('show-user-nav');
            });

            $('.collapse-main-nav').on('click', function () {
                if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
                return false;
            });

        });

