var s,
Takeit = {

  settings: {
    menu: $("#menu"),
    nav: $("#nav"),
    overlay: $('#overlay'),
    scr: $('.screen'),
    screenone: $('.screen-one'),
    screentwo: $('.screen-two'),
    screenthree: $('.screen-three')

  },

  init: function() {
    // kick things off
    s = this.settings;
  },

  bindMenuActions: function() {
    s.menu.click( function () {
       console.log('click menu');
      if(!$(this).hasClass('active')) {
        // open menu
        $(this).addClass('active');
        if (!s.nav.hasClass('displayed')) {
          s.nav.addClass('displayed');
          s.overlay.addClass('displayed');
        }

      } else {
        // close menu
        $(this).removeClass('active');
        s.nav.removeClass('displayed');
        s.overlay.removeClass('displayed');
      }
      return false;
    });
  }

  // getMore: function(numToGet) {
  //   // $.ajax or something
  //   // using numToGet as param
  // }

};

Takeit.init();
Takeit.bindMenuActions();


// $(document).ready (function () {
//   // initialize swiper when document ready
//   var mySwiper = new Swiper ('.swiper-container', {
//     pagination: '.swiper-pagination',
//     direction: 'vertical',
//     slidesPerView: 1,
//     paginationClickable: true,
//     spaceBetween: 30,
//     mousewheelControl: true
//   })
//   mySwiper.on('slideChangeStart', function () {
//     console.log('slide change start');
//   });
// });

$(window).bind('mousewheel', function(event) {
    var src1 = s.screenone.hasClass('active'),
        src2 = s.screentwo.hasClass('active'),
        src3 = s.screenthree.hasClass('active');

    if (event.originalEvent.wheelDelta >= 0) {
    console.log('Scroll up');
    setTimeout(function() {
      if (src2) {
        s.screentwo.removeClass('active');
        s.screentwo.addClass('bottom');
        s.screenone.addClass('active');
        s.screenone.removeClass('top');
      }
     }, 1000);
    setTimeout(function() {
      if (src3) {
        s.screenthree.removeClass('active');
        s.screenthree.addClass('bottom');
        s.screentwo.addClass('active');
        s.screentwo.removeClass('top');
      }
    }, 1000);
  }
  else {
    console.log('Scroll down');
    setTimeout(function() {
      if (src1) {
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
        s.screentwo.addClass('active');
        s.screentwo.removeClass('bottom');
      }
    }, 1000);
    setTimeout(function() {
      if (src2) {
        s.screentwo.removeClass('active');
        s.screentwo.addClass('top');
        s.screenthree.addClass('active');
        s.screenthree.removeClass('bottom');
      }
    }, 1000);
  }
});


$(document).on('click touchstart', function () {
  $('#menu').removeClass('active');
  $('#nav').removeClass('displayed');
  $('#overlay').removeClass('displayed');
});
