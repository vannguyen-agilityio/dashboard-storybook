var s,
Takeit = {

  settings: {
    $body: $('body'),
    $menu: $('#menu'),
    $nav: $('#nav'),
    $srcWrapper: $('#screen'),
    $footer: $('#footer'),
    $overlay: $('#overlay'),
    $pics: $('#pics'),
    $pagination: $('#pag-bullet')
  },

  init: function() {
    // kick things off
    s = this.settings;
    s.$srcWrapper.find('.screen-one').addClass('active');
  },

  bindMenuActions: function() {
    s.$menu.click( function (e) {
      var _this = $(this);
      if(!_this.hasClass('active')) {
        // open menu
        _this.addClass('active');

        if (!s.$nav.hasClass('displayed')) {
          s.$nav.addClass('displayed');
          s.$overlay.addClass('displayed');
        }

      } else {
        // close menu
        _this.removeClass('active');
        s.$nav.removeClass('displayed');
        s.$overlay.removeClass('displayed');
      }
      return false;
    });
  },

  bindPagActive: function(scrActive, scrRemoveActive, up, stateAdd, stateRemove, pagBullet) {
    scrRemoveActive.removeClass('active');

    if (up) {
      scrActive.removeClass('bottom');
      scrRemoveActive.addClass('top');
      if (pagBullet) {
        pagBullet.removeClass('active').next().addClass('active');
      }
    } else {
      scrActive.removeClass('top');
      scrRemoveActive.addClass('bottom');
      if (pagBullet) {
        pagBullet.removeClass('active').prev().addClass('active');
      }
    }
    scrActive.addClass('active');

    switch(stateAdd) {
      case 1:
          s.$pics.addClass('state-one');
          break;
      case 2:
          s.$pics.addClass('state-two');
          break;
      case 3:
          s.$pics.addClass('state-three');
          break;
    }
    switch(stateRemove) {
      case 1:
          s.$pics.removeClass('state-one');
          break;
      case 2:
          s.$pics.removeClass('state-two');
          break;
      case 3:
          s.$pics.removeClass('state-three');
          break;
    }

  },

  bindPagBulletActions: function() {
    var activeScr1 = s.$pagination.find('span:nth-child(1)'),
        activeScr2 = s.$pagination.find('span:nth-child(2)'),
        activeScr3 = s.$pagination.find('span:nth-child(3)'),
        activeScr4 = s.$pagination.find('span:nth-child(4)'),
        activeScr5 = s.$pagination.find('span:nth-child(5)');

    s.$pagination.click( function (e) {
      var _this = $(e.target),
          alt = s.$pagination.find('span.active');
      // case src one active
      if (alt.is(activeScr1) && _this.is(activeScr2)) {
        Takeit.bindPagActive(scrTwo, scrOne, true, 1, 0, false);
      }
      if (alt.is(activeScr1) && _this.is(activeScr3)) {
        Takeit.bindPagActive(scrThree, scrOne, true, 2, 0, false);
        scrTwo.removeClass('bottom').addClass('top');
      }
      if (alt.is(activeScr1) && _this.is(activeScr4)) {
        Takeit.bindPagActive(scrFour, scrOne, true, 3, 0, false);
        scrTwo.removeClass('bottom').addClass('top');
        scrThree.removeClass('bottom').addClass('top');
      }
      if (alt.is(activeScr1) && _this.is(activeScr5)) {
        Takeit.bindPagActive(scrFive, scrOne, true, 0, 0, false);
        scrTwo.removeClass('bottom').addClass('top');
        scrThree.removeClass('bottom').addClass('top');
        scrFour.removeClass('bottom').addClass('top');
      }

      // case src two active
      if (alt.is(activeScr2) && _this.is(activeScr1)) {
        Takeit.bindPagActive(scrOne, scrTwo, false, 0, 1, false);
      }
      if (alt.is(activeScr2) && _this.is(activeScr3)) {
        Takeit.bindPagActive(scrThree, scrTwo, true, 2, 1, false);
      }
      if (alt.is(activeScr2) && _this.is(activeScr4)) {
        Takeit.bindPagActive(scrFour, scrTwo, true, 3, 1, false);
        scrThree.removeClass('bottom').addClass('top');
      }
      if (alt.is(activeScr2) && _this.is(activeScr5)) {
        Takeit.bindPagActive(scrFive, scrTwo, true, 0, 1, false);
        scrThree.removeClass('bottom').addClass('top');
        scrFour.removeClass('bottom').addClass('top');
      }

      // case src three active
      if (alt.is(activeScr3) && _this.is(activeScr1)) {
        Takeit.bindPagActive(scrOne, scrThree, false, 0, 2, false);
        scrTwo.removeClass('top').addClass('bottom');
      }
      if (alt.is(activeScr3) && _this.is(activeScr2)) {
        Takeit.bindPagActive(scrTwo, scrThree, false, 1, 2, false);
      }
      if (alt.is(activeScr3) && _this.is(activeScr4)) {
        Takeit.bindPagActive(scrFour, scrThree, true, 3, 2, false);
      }
      if (alt.is(activeScr3) && _this.is(activeScr5)) {
        Takeit.bindPagActive(scrFive, scrThree, true, 0, 2, false);
        scrFour.removeClass('bottom').addClass('top');
      }

      // case src four active
      if (alt.is(activeScr4) && _this.is(activeScr1)) {
        Takeit.bindPagActive(scrOne, scrFour, false, 0, 3, false);
        scrTwo.removeClass('top').addClass('bottom');
        scrThree.removeClass('top').addClass('bottom');
      }
      if (alt.is(activeScr4) && _this.is(activeScr2)) {
        Takeit.bindPagActive(scrTwo, scrFour, false, 1, 0, false);
        scrThree.removeClass('top').addClass('bottom');
      }
      if (alt.is(activeScr4) && _this.is(activeScr3)) {
        Takeit.bindPagActive(scrThree, scrFour, false, 2, 3,false);
      }
      if (alt.is(activeScr4) && _this.is(activeScr5)) {
        Takeit.bindPagActive(scrFive, scrFour, true, 0, 3, false);
      }

      // case src five active
      if (alt.is(activeScr5) && _this.is(activeScr1)) {
        Takeit.bindPagActive(scrOne, scrFive, false, 0, 0, false);
        scrTwo.removeClass('top').addClass('bottom');
        scrThree.removeClass('top').addClass('bottom');
        scrFour.removeClass('top').addClass('bottom');
      }
      if (alt.is(activeScr5) && _this.is(activeScr2)) {
        Takeit.bindPagActive(scrTwo, scrFive, false, 1, 0, false);
        scrThree.removeClass('top').addClass('bottom');
        scrFour.removeClass('top').addClass('bottom');
      }
      if (alt.is(activeScr5) && _this.is(activeScr3)) {
        Takeit.bindPagActive(scrThree, scrFive, false, 2, 0, false);
        scrFour.removeClass('top').addClass('bottom');
      }
      if (alt.is(activeScr5) && _this.is(activeScr4)) {
        Takeit.bindPagActive(scrFour, scrFive, false, 3, 0, false);
      }


      s.$footer.removeClass('footer-show');
      s.$srcWrapper.removeClass('up');
      alt.removeClass('active');
      _this.addClass('active');
      return false;
    });
  },

  bindTouchStart: function() {
    s.$overlay.on('click touchstart', function () {
      s.$menu.removeClass('active');
      s.$nav.removeClass('displayed');
      s.$overlay.removeClass('displayed');
    });
  },



  bindScrollDown: function(delta, src1, src2, src3, src4, src5, pagBullet, footershow) {
    //scroll down
    delta = 0.2;
    if (src1 && (scrOne.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        Takeit.bindPagActive(scrTwo, scrOne, true, 1, 0, pagBullet);
      }, 100));
    }

    if (src2 && (scrTwo.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        Takeit.bindPagActive(scrThree, scrTwo, true, 2, 1, pagBullet);
        pagBullet.parent().addClass('dark');
      }, 100));
    }

    if (src3 && (scrThree.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        Takeit.bindPagActive(scrFour, scrThree, true, 3, 2, pagBullet);
        pagBullet.parent().removeClass('dark');
      }, 100));
    }

    if (src4 && (scrFour.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        Takeit.bindPagActive(scrFive, scrFour, true, 0, 3, pagBullet);
      }, 100));
    }

    if (src5 && (scrFive.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
        s.$footer.addClass('footer-show');
        s.$srcWrapper.addClass('up');
      }, 100));
    }

  },

  bindScrollUp: function(delta, src1, src2, src3, src4, src5, pagBullet, footershow) {
    //scroll up
    delta = 0;
    if (src2 && (scrTwo.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
      Takeit.bindPagActive(scrOne, scrTwo, false, 0, 1, pagBullet);
      }, 100));
    }

    if (src3 && (scrThree.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
      Takeit.bindPagActive(scrTwo, scrThree, false, 1, 2, pagBullet);
      pagBullet.parent().removeClass('dark');
      }, 100));
    }
    if (src4 && (scrFour.position().top === 0)) {
      $.data(this, 'timer', setTimeout(function() {
      Takeit.bindPagActive(scrThree, scrFour, false, 2, 3, pagBullet);
      pagBullet.parent().addClass('dark');
      }, 100));
    }

    if (src5 && (scrFive.position().top === 0) && !footershow) {
      $.data(this, 'timer', setTimeout(function() {
      Takeit.bindPagActive(scrFour, scrFive, false, 3, 0, pagBullet);
      }, 100));
    }

    if(footershow) {
      $.data(this, 'timer', setTimeout(function() {
        s.$footer.removeClass('footer-show');
        s.$srcWrapper.removeClass('up');
      }, 500));
    }
  },

  mousewheelScreen: function() {
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
      var src1 = scrOne.hasClass('active'),
        src2 = scrTwo.hasClass('active'),
        src3 = scrThree.hasClass('active'),
        src4 = scrFour.hasClass('active'),
        src5 = scrFive.hasClass('active'),
        footerShow = s.$footer.hasClass('footer-show'),
        pagBullet = s.$pagination.find('span.active');

      clearTimeout($.data(this, 'timer'));

      e.preventDefault();
      var delta;
      // For Firefox
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        if (e.originalEvent.detail > 0) {
          //scroll down
          Takeit.bindScrollDown(delta, src1, src2, src3, src4, src5, pagBullet, footerShow);
        } else {
          //scroll up
          Takeit.bindScrollUp(delta, src1, src2, src3, src4, src5, pagBullet, footerShow);
        }
      } else {
       //For Chrome, IE
        if (e.originalEvent.wheelDelta < 0) {
          //scroll down
          Takeit.bindScrollDown(delta, src1, src2, src3, src4, src5, pagBullet, footerShow);
        } else {
          //scroll up
          Takeit.bindScrollUp(delta, src1, src2, src3, src4, src5, pagBullet, footerShow);
        }
      }
      e.stopPropagation();
      return false;
    });
  }

};

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

Takeit.init();

var scrOne = s.$srcWrapper.find('.screen-one'),
  scrTwo = s.$srcWrapper.find('.screen-two'),
  scrThree = s.$srcWrapper.find('.screen-three'),
  scrFour = s.$srcWrapper.find('.screen-four'),
  scrFive = s.$srcWrapper.find('.screen-five');

Takeit.bindMenuActions();
Takeit.bindTouchStart();
Takeit.bindPagBulletActions();

if(!isMobile.iPhone() ) {
  Takeit.mousewheelScreen();
  s.$srcWrapper.find('.mobile-screen').remove();
} else {
  s.$body.addClass('mobile');
  scrOne.remove();
  scrTwo.remove();
  scrThree.remove();
  scrFour.remove();
  scrFive.remove();
  s.$pics.remove();
  s.$pagination.parent().remove();
  s.$footer.remove();
  var $truct = $('#truck');
  // move truct
  setInterval(function(){
    if ($truct.hasClass('no-transition')) {
      $truct.removeClass('no-transition');
      $truct.addClass('braking');
    } else {
      if($truct.hasClass('braking')){
        $truct.removeClass('braking');
        $truct.addClass('moving');
      } else {
        if($truct.hasClass('moving')){
          $truct.removeClass('moving');
          $truct.addClass('no-transition');
        }
      }
    }
  },2000);
}