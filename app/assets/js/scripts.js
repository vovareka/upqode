$(document).ready(function () {
  new Swiper('.main_banner_container', {
        loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.main_banner_next',
          prevEl: '.main_banner_prev',
        },
        pagination: {
          el: '.main_banner_pagination',
          clickable: true,
        }
  });

  new Swiper('.our_product', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.our_product_pagination',
        clickable: true,
      },
      breakpoints:{
        1100:{
          slidesPerView: 2,
        },
        767:{
          slidesPerView: 1,
        },
        450:{
          slidesPerView: 1,
          spaceBetween: 15,
        }
      }
  });
   $('#ph').LineProgressbar({
    percentage:0,
    });
    $('#html').LineProgressbar({
    percentage:0,
    });
    $('#js').LineProgressbar({
    percentage:0,
    });
    $('#wp').LineProgressbar({
    percentage:0,
    });

  $(function() {
      scrolllinks = $("a[href^=#]"),
      scrolllinks.click(function(e){
        var shref = $(this).attr("href"),
            offTop = shref === "#" ? 0 : $(shref).offset().top;
        $('html, body').stop().animate({ 
            scrollTop: offTop
        }, 1500);
        e.preventDefault();
      });
  });
  $(window).scroll(function() {     
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
          $(".header").addClass("active");
      }
      else {
          $(".header").removeClass("active");
      }
  });
  
  var hamburger = $('#hamburger-icon');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     return false;
  });


    $('#hamburger-icon').click(function () {
        $('.navigation').slideToggle('show');
    });
    $(window).resize(function() {      
        $('.navigation').removeAttr('style');
        hamburger.removeClass('active');
    });

var a = 0;
$(window).scroll(function() {
  var oTop = $('#about_us').offset().top;
  if (a == 0 && $(window).scrollTop() > oTop) {
       $('#ph').LineProgressbar({
        percentage:79,
        height: '3px',
        fillBackgroundColor: '#009dda'
        });
        $('#html').LineProgressbar({
        percentage:90,
        height: '3px',
        fillBackgroundColor: '#009dda'
        });
        $('#js').LineProgressbar({
        percentage:69,
        height: '3px',
        fillBackgroundColor: '#009dda'
        });
        $('#wp').LineProgressbar({
        percentage:92,
        height: '3px',
        fillBackgroundColor: '#009dda'
        });
    a = 1;
  }
});
});

$(document).ready(function() {
  $('select').niceSelect();
});