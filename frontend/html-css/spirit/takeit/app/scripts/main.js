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
    screenfour: $('.screen-four'),
    pagination: $('#pag-bullet')
  },

  init: function() {
    // kick things off
    s = this.settings;
    s.screenone.addClass('active');
  },

  bindMenuActions: function() {
    s.menu.click( function () {
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
  },

  bindPagBulletActions: function() {
    var activeScr1 = $('#pag-bullet span:nth-child(1)'),
        activeScr2 = $('#pag-bullet span:nth-child(2)'),
        activeScr3 = $('#pag-bullet span:nth-child(3)'),
        activeScr4 = $('#pag-bullet span:nth-child(4)');

    s.pagination.click( function (e) {
      var alt = s.pagination.find('span').removeClass('active');

      if (alt.is( activeScr1) && $(e.target).is(activeScr2)) {
        s.screentwo.removeClass('bottom');
        s.screentwo.addClass('active');
        s.pics.addClass('state-one');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
      }
      if (alt.is( activeScr1) && $(e.target).is(activeScr3)) {
        s.screenthree.removeClass('bottom');
        s.screenthree.addClass('active');
        s.pics.addClass('state-two');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
      }
      if (alt.is( activeScr1) && $(e.target).is(activeScr4)) {
        s.screenfour.removeClass('bottom');
        s.screenfour.addClass('active');
        s.pics.addClass('state-three');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
      }

      if (alt.is( activeScr2) && $(e.target).is(activeScr1)) {
        s.screenone.removeClass('top');
        s.screenone.addClass('active');
        s.screentwo.removeClass('active');
        s.pics.removeClass('state-one');
        s.screentwo.addClass('bottom');
      }
      if (alt.is( activeScr2) && $(e.target).is(activeScr3)) {
        s.screenthree.removeClass('bottom');
        s.screenthree.addClass('active');
        s.screentwo.removeClass('active');
        s.pics.removeClass('state-one');
        s.pics.addClass('state-two');
        s.screentwo.addClass('top');
      }
      if (alt.is( activeScr2) && $(e.target).is(activeScr4)) {
        s.screenfour.removeClass('bottom');
        s.screenfour.addClass('active');
        s.screentwo.removeClass('active');
        s.pics.removeClass('state-one');
        s.pics.addClass('state-three');
        s.screentwo.addClass('top');
      }

      if (alt.is( activeScr3) && $(e.target).is(activeScr1)) {
        s.screenone.removeClass('top');
        s.screenone.addClass('active');
        s.screenthree.removeClass('active');
        s.pics.removeClass('state-two');
        s.screenthree.addClass('bottom');
      }
      if (alt.is( activeScr3) && $(e.target).is(activeScr2)) {
        s.screentwo.removeClass('top');
        s.screentwo.addClass('active');
        s.pics.removeClass('state-two');
        s.pics.addClass('state-one');
        s.screenthree.removeClass('active');
        s.screenthree.addClass('bottom');
      }
      if (alt.is( activeScr3) && $(e.target).is(activeScr4)) {
        s.screenfour.removeClass('bottom');
        s.screenfour.addClass('active');
        s.screenthree.removeClass('active');
        s.pics.removeClass('state-two');
        s.pics.addClass('state-three');
        s.screenthree.addClass('top');
      }

      if (alt.is( activeScr4) && $(e.target).is(activeScr1)) {
        s.screenone.removeClass('top');
        s.screenone.addClass('active');
        s.screenfour.removeClass('active');
        s.pics.removeClass('state-three');
        s.screenfour.addClass('bottom');
      }
      if (alt.is( activeScr4) && $(e.target).is(activeScr2)) {
        s.screentwo.removeClass('top');
        s.screentwo.addClass('active');
        s.pics.removeClass('state-three');
        s.pics.addClass('state-one');
        s.screenfour.removeClass('active');
        s.screenfour.addClass('bottom');
      }
      if (alt.is( activeScr4) && $(e.target).is(activeScr3)) {
        s.screenthree.removeClass('top');
        s.screenthree.addClass('active');
        s.pics.removeClass('state-three');
        s.pics.addClass('state-two');
        s.screenfour.removeClass('active');
        s.screenfour.addClass('bottom');
      }

      $(e.target).addClass('active');
      return false;
    });
  },

  bindTouchStart: function() {
    s.overlay.on('click touchstart', function () {
      $('#menu').removeClass('active');
      $('#nav').removeClass('displayed');
      $('#overlay').removeClass('displayed');
    });
  },

  bindScrollDown: function(delta, src1, src2, src3, src4, pagBullet, footershow) {
    //scroll down
    delta = 0.2;
    if (src1) {
      $.data(this, 'timer', setTimeout(function() {
      s.screentwo.removeClass('bottom');
      s.screentwo.addClass('active');
      s.pics.addClass('state-one');
      s.screenone.removeClass('active');
      s.screenone.addClass('top');
      pagBullet.removeClass('active').next().addClass('active');
      }, 500));
    }

    if (src2) {
      $.data(this, 'timer', setTimeout(function() {
      s.screenthree.removeClass('bottom');
      s.screenthree.addClass('active');
      pagBullet.removeClass('active').next().addClass('active');
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
      pagBullet.removeClass('active').next().addClass('active');
      s.pics.addClass('state-three');
      }, 500));
    }

    if (src4 && (s.screenfour.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        s.footer.addClass('footer-show');
        s.scrwapper.addClass('up');
      }, 500));
    }

  },

  bindScrollUp: function(delta, src1, src2, src3, src4, pagBullet, footershow) {
    //scroll up
    delta = 0;
    if (src2) {
      $.data(this, 'timer', setTimeout(function() {
      s.screenone.removeClass('top');
      s.screenone.addClass('active');
      pagBullet.removeClass('active').prev().addClass('active');
      s.screentwo.removeClass('active');
      s.pics.removeClass('state-one');
      s.screentwo.addClass('bottom');
      }, 500));
    }

    if (src3) {
      $.data(this, 'timer', setTimeout(function() {
      s.screentwo.removeClass('top');
      s.screentwo.addClass('active');
      pagBullet.removeClass('active').prev().addClass('active');
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
      pagBullet.removeClass('active').prev().addClass('active');
      s.pics.addClass('state-two');
      s.screenfour.removeClass('active');
      s.screenfour.addClass('bottom');
      s.pics.removeClass('state-three');
      }, 500));
    }

    if(footershow) {
      $.data(this, 'timer', setTimeout(function() {
        s.footer.removeClass('footer-show');
        s.scrwapper.removeClass('up');
      }, 500));
    }
  },

  mousewheelScreen: function() {
    $('#screen').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
      var src1 = s.screenone.hasClass('active'),
          src2 = s.screentwo.hasClass('active'),
          src3 = s.screenthree.hasClass('active'),
          src4 = s.screenfour.hasClass('active'),
          footershow = s.footer.hasClass('footer-show'),
          pagBullet = s.pagination.find('span.active');

      clearTimeout($.data(this, 'timer'));

      e.preventDefault();
      var delta;
      // For Firefox
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        if (e.originalEvent.detail > 0) {
          //scroll down
          Takeit.bindScrollDown(delta, src1, src2, src3, src4, pagBullet, footershow);
        } else {
          //scroll up
          Takeit.bindScrollUp(delta, src1, src2, src3, src4, pagBullet, footershow);
        }
      } else {
       //For Chrome, IE
        if (e.originalEvent.wheelDelta < 0) {
          //scroll down
          Takeit.bindScrollDown(delta, src1, src2, src3, src4, pagBullet, footershow);
        } else {
          //scroll up
          Takeit.bindScrollUp(delta, src1, src2, src3, src4, pagBullet, footershow);
        }
      }
      e.stopPropagation();
      return false;
    });
  }

};

Takeit.init();
Takeit.bindMenuActions();
Takeit.bindTouchStart();
Takeit.mousewheelScreen();
Takeit.bindPagBulletActions();