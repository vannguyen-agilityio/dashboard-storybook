var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  iPhone: function() {
      return navigator.userAgent.match(/iPhone/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};


var s,
Fivefootsix = {

  settings: {
    body: $('body'),
    menu: $("#menu"),
    nav: $("#nav"),
    scrwapper: $('#screen'),
    overlay: $('#overlay'),
    video: $('#full-video'),
    scr: $('.screen'),
    screenone: $('#screen-one'),
    screentwo: $('#screen-two'),
    screenthree: $('#screen-three'),
    pagination: $('#pag-bullet'),
    arrowbar: $('#arrow-bar')
  },

  init: function() {
    // kick things off
    s = this.settings;
    s.screenone.addClass('active');
  },

  bindActions: function() {
    //click menu hamburger
    s.menu.click( function (e) {

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

    //click arrow bar bottom
    s.arrowbar.click( function (e) {
      console.log('click arrowbar');
      var pagactive = s.pagination.find('a.active'),
          activeScr1 = $('#pag-bullet a:nth-child(1)'),
          activeScr2 = $('#pag-bullet a:nth-child(2)');
      if (!(pagactive.is(activeScr1) || pagactive.is(activeScr2))) {
        return;
      } else {
        if (pagactive.is(activeScr1)) {
          s.screenone.removeClass('active');
          s.screenone.addClass('top');
          s.screentwo.removeClass('bottom');
          s.screentwo.addClass('active');
        } else {
          s.screentwo.removeClass('active');
          s.screentwo.addClass('top');
          s.screenthree.addClass('active');
          s.screenthree.removeClass('bottom');
          s.body.addClass('dark');
        }
        pagactive.removeClass('active').next().addClass('active');
      }
    });
  },

  /**
     * Load video.
     */
    loadVideo: function() {

      // don't show video mobile/tablet
      if (isMobile.iPhone()) {
        return;
      }

      var
        video = $(document).find('iframe'),
        height = $(document).height(),
        width = $(document).width(),
        expWidth = width,
        expHeight = height,
        marginLeft = 0,
        marginTop = 0,
        ratio = video.data('width') / video.data('height'),
        expRatio = expWidth / expHeight;
        console.log('$(document).height()',height, width);
      if (expRatio > ratio) {
        expHeight = Math.ceil(expWidth / ratio) + 1;
        marginLeft = Math.ceil((expWidth + width) / 4);
        marginTop = Math.ceil((expWidth + width) / 7);
        console.log(' marginLeft marginTop expRatio > ratio111',expHeight ,  marginLeft,  marginTop);
      } else {
        expWidth = Math.ceil(expHeight * ratio) + 200;
        marginLeft = Math.ceil((expWidth - height));
        marginTop = Math.ceil((expWidth - height)/2 - 11);
        console.log(' marginLeft marginTop expRatio <= ratio2222', expWidth, width, marginLeft,  marginTop);
      }

      video.css({
        'width': expWidth,
        'height': expHeight+100,
        'margin-left': -marginLeft,
        'margin-top': -marginTop - 50
      });
    },

  bindPagBulletActions: function() {
    var activeScr1 = $('#pag-bullet a:nth-child(1)'),
        activeScr2 = $('#pag-bullet a:nth-child(2)'),
        activeScr3 = $('#pag-bullet a:nth-child(3)');

    s.pagination.click( function (e) {
      var alt = s.pagination.find('a').removeClass('active'),
          target = $(e.target).parent();

      if (alt.is(activeScr1) && target.is(activeScr2)) {
        s.screentwo.removeClass('bottom');
        s.screentwo.addClass('active');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
      }
      if (alt.is( activeScr1) && target.is(activeScr3)) {
        s.screenthree.removeClass('bottom');
        s.screenthree.addClass('active');
        s.body.addClass('dark');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
      }


      if (alt.is(activeScr2) && target.is(activeScr1)) {
        s.screenone.removeClass('top');
        s.screenone.addClass('active');
        s.screentwo.removeClass('active');
        s.screentwo.addClass('bottom');
      }
      if (alt.is(activeScr2) && target.is(activeScr3)) {
        s.screenthree.removeClass('bottom');
        s.screenthree.addClass('active');
        s.body.addClass('dark');
        s.screentwo.removeClass('active');
        s.screentwo.addClass('top');
      }


      if (alt.is(activeScr3) && target.is(activeScr1)) {
        s.screenone.removeClass('top');
        s.screenone.addClass('active');
        s.screenthree.removeClass('active');
        s.screenthree.addClass('bottom');
        s.body.removeClass('dark');
      }
      if (alt.is(activeScr3) && target.is(activeScr2)) {
        s.screentwo.removeClass('top');
        s.screentwo.addClass('active');
        s.screenthree.removeClass('active');
        s.screenthree.addClass('bottom');
        s.body.removeClass('dark');
      }
      target.addClass('active');
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

  bindScrollDown: function(delta, src1, src2, src3, pagBullet) {
    //scroll down
    delta = 0.2;
    if (src1 && (s.screenone.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        s.screentwo.removeClass('bottom');
        s.screentwo.addClass('active');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
        pagBullet.removeClass('active').next().addClass('active');
      }, 100));
    }

    if (src2 && (s.screentwo.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        s.screenthree.removeClass('bottom');
        s.screenthree.addClass('active');
        s.body.addClass('dark');
        pagBullet.removeClass('active').next().addClass('active');
        s.screentwo.removeClass('active');
        s.screentwo.addClass('top');
      }, 100));
    }
  },

  bindScrollUp: function(delta, src1, src2, src3, pagBullet) {
    //scroll up
    delta = 0;
    if (src2 && (s.screentwo.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
      s.screenone.removeClass('top');
      s.screenone.addClass('active');
      pagBullet.removeClass('active').prev().addClass('active');
      s.screentwo.removeClass('active');
      s.screentwo.addClass('bottom');
      }, 100));
    }

    if (src3 && (s.screenthree.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
      s.screentwo.removeClass('top');
      s.screentwo.addClass('active');
      pagBullet.removeClass('active').prev().addClass('active');
      s.screenthree.removeClass('active');
      s.screenthree.addClass('bottom');
      s.body.removeClass('dark');
      }, 100));
    }
  },

  mousewheelScreen: function() {
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
      var src1 = s.screenone.hasClass('active'),
          src2 = s.screentwo.hasClass('active'),
          src3 = s.screenthree.hasClass('active'),
          pagBullet = s.pagination.find('a.active');

      clearTimeout($.data(this, 'timer'));

      e.preventDefault();
      var delta;
      // For Firefox
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        if (e.originalEvent.detail > 0) {
          //scroll down
          Fivefootsix.bindScrollDown(delta, src1, src2, src3, pagBullet);
        } else {
          //scroll up
          Fivefootsix.bindScrollUp(delta, src1, src2, src3, pagBullet);
        }
      } else {
       //For Chrome, IE
        if (e.originalEvent.wheelDelta < 0) {
          //scroll down
          Fivefootsix.bindScrollDown(delta, src1, src2, src3, pagBullet);
        } else {
          //scroll up
          Fivefootsix.bindScrollUp(delta, src1, src2, src3, pagBullet);
        }
      }
      e.stopPropagation();
      return false;
    });
  }
};


Fivefootsix.init();
Fivefootsix.bindActions();
Fivefootsix.bindTouchStart();
Fivefootsix.bindPagBulletActions();
Fivefootsix.mousewheelScreen();
if(isMobile.iOS() ) {
  s.video.remove();
}

$(window).resize(function() {
  Fivefootsix.loadVideo();
}).trigger('resize');