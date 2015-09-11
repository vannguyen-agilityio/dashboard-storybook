var s,
Takeit = {

  settings: {
    menu: $("#menu"),
    nav: $("#nav"),
    scrwapper: $('#screen'),
    footer: $('footer'),
    overlay: $('#overlay'),
    pics: $('#pics'),
    scr: $('.screen'),
    screenone: $('.screen-one'),
    screentwo: $('.screen-two'),
    screenthree: $('.screen-three'),
    screenfour: $('.screen-four')

  },

  init: function() {
    // kick things off
    s = this.settings;
    s.screenone.addClass('active');
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



$('#screen').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
  var src1 = s.screenone.hasClass('active'),
      src2 = s.screentwo.hasClass('active'),
      src3 = s.screenthree.hasClass('active'),
      src4 = s.screenfour.hasClass('active'),
      footershow = s.footer.hasClass('footer-show');

  clearTimeout($.data(this, 'timer'));

  e.preventDefault();
  var delta;
  // For Firefox
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    if (e.originalEvent.detail > 0) {
      //scroll down
      delta = 0.2;
      if (src1) {
        $.data(this, 'timer', setTimeout(function() {
        s.screentwo.removeClass('bottom');
        s.screentwo.addClass('active');
        s.pics.addClass('state-one');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
        }, 500));
      }

      if (src2) {
        $.data(this, 'timer', setTimeout(function() {
        s.screenthree.removeClass('bottom');
        s.screenthree.addClass('active');
        s.pics.addClass('state-two');
        s.screentwo.removeClass('active');
        s.pics.removeClass('state-one');
        s.screentwo.addClass('top');
        }, 500));
      }

      if (src3) {
        $.data(this, 'timer', setTimeout(function() {
        s.screenthree.removeClass('active');
        s.pics.removeClass('state-two');
        s.screenthree.addClass('top');
        s.screenfour.removeClass('bottom');
        s.screenfour.addClass('active');
        s.pics.addClass('state-three');
        }, 500));
      }

      if (src4 && (s.screenfour.position().top === 0)) {
        console.log('s.screenfour.position().top',s.screenfour.position().top);
        $.data(this, 'timer', setTimeout(function() {
          s.footer.addClass('footer-show');
          s.scrwapper.css('transform','translate3d(0px, -192px, 0px)');
        }, 500));
      }
    } else {
        //scroll up
      delta = 0;
      if (src2) {
        $.data(this, 'timer', setTimeout(function() {
        s.screenone.removeClass('top');
        s.screenone.addClass('active');
        s.screentwo.removeClass('active');
        s.pics.removeClass('state-one');
        s.screentwo.addClass('bottom');
        }, 500));
      }

      if (src3) {
        $.data(this, 'timer', setTimeout(function() {
        s.screentwo.removeClass('top');
        s.screentwo.addClass('active');
        s.pics.addClass('state-one');
        s.screenthree.removeClass('active');
        s.screenthree.addClass('bottom');
        s.pics.removeClass('state-two');
        }, 500));
      }

      if (src4 & !footershow) {
        $.data(this, 'timer', setTimeout(function() {
        s.screenthree.removeClass('top');
        s.screenthree.addClass('active');
        s.pics.addClass('state-two');
        s.screenfour.removeClass('active');
        s.screenfour.addClass('bottom');
        s.pics.removeClass('state-three');
        }, 500));
      }
      if(footershow) {
        $.data(this, 'timer', setTimeout(function() {
          s.footer.removeClass('footer-show');
          s.scrwapper.css('transform','translate3d(0px, 0px, 0px)');
        }, 500));
      }
    }
  } else {
     //For Chrome, IE
      if (e.originalEvent.wheelDelta < 0) {
          //scroll down
        delta = 0.2;
        if (src1) {
          $.data(this, 'timer', setTimeout(function() {
          s.screentwo.removeClass('bottom');
          s.screentwo.addClass('active');
          s.pics.addClass('state-one');
          s.screenone.removeClass('active');
          s.screenone.addClass('top');
          }, 500));
        }

        if (src2) {
          $.data(this, 'timer', setTimeout(function() {
          s.screenthree.removeClass('bottom');
          s.screenthree.addClass('active');
          s.pics.addClass('state-two');
          s.screentwo.removeClass('active');
          s.pics.removeClass('state-one');
          s.screentwo.addClass('top');
          }, 500));
        }
        if (src3) {
          $.data(this, 'timer', setTimeout(function() {
          s.screenthree.removeClass('active');
          s.pics.removeClass('state-two');
          s.screenthree.addClass('top');
          s.screenfour.removeClass('bottom');
          s.screenfour.addClass('active');
          s.pics.addClass('state-three');
          }, 500));
        }
        if (src4 && (s.screenfour.position().top === 0)) {
          $.data(this, 'timer', setTimeout(function() {
            s.footer.addClass('footer-show');
            s.scrwapper.css('transform','translate3d(0px, -192px, 0px)');
          }, 500));
        }
      } else {
          //scroll up
        delta = 0;
        if (src2) {
          $.data(this, 'timer', setTimeout(function() {
          s.screenone.removeClass('top');
          s.screenone.addClass('active');
          s.screentwo.removeClass('active');
          s.pics.removeClass('state-one');
          s.screentwo.addClass('bottom');
          }, 500));
        }

        if (src3) {
          $.data(this, 'timer', setTimeout(function() {
          s.screentwo.removeClass('top');
          s.screentwo.addClass('active');
          s.pics.addClass('state-one');
          s.screenthree.removeClass('active');
          s.screenthree.addClass('bottom');
          s.pics.removeClass('state-two');
          }, 500));
        }

        if (src4 & !footershow) {
          $.data(this, 'timer', setTimeout(function() {
          s.screenthree.removeClass('top');
          s.screenthree.addClass('active');
          s.pics.addClass('state-two');
          s.screenfour.removeClass('active');
          s.screenfour.addClass('bottom');
          s.pics.removeClass('state-three');
          }, 500));
        }
        if(footershow) {
          $.data(this, 'timer', setTimeout(function() {
            s.footer.removeClass('footer-show');
            s.scrwapper.css('transform','translate3d(0px, 0px, 0px)');
          }, 500));
        }
      }
  }
  e.stopPropagation();
  return false;
});


s.overlay.on('click touchstart', function () {
  $('#menu').removeClass('active');
  $('#nav').removeClass('displayed');
  $('#overlay').removeClass('displayed');
});

