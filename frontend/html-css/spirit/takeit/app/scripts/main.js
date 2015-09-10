var s,
Takeit = {

  settings: {
    menu: $("#menu"),
    nav: $("#nav"),
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



$('#screen').bind('mousewheel', function(event) {
    var src1 = s.screenone.hasClass('active'),
        src2 = s.screentwo.hasClass('active'),
        src3 = s.screenthree.hasClass('active'),
        src4 = s.screenfour.hasClass('active');


  clearTimeout($.data(this, 'timer'));


    if (event.originalEvent.wheelDelta >= 0) {


      if (src2) {
        $.data(this, 'timer', setTimeout(function() {
        s.screenone.removeClass('top');
        s.screenone.addClass('active');
        s.screentwo.removeClass('active');
        s.pics.removeClass('state-one');
        s.screentwo.addClass('bottom');
        }, 1000));
      }

      if (src3) {
        $.data(this, 'timer', setTimeout(function() {
        s.screentwo.removeClass('top');
        s.screentwo.addClass('active');
        s.pics.addClass('state-one');
        s.screenthree.removeClass('active');
        s.screenthree.addClass('bottom');
        s.pics.removeClass('state-two');
        }, 1000));
      }
    }
    else {

      if (src1) {
        $.data(this, 'timer', setTimeout(function() {
        s.screentwo.removeClass('bottom');
        s.screentwo.addClass('active');
        s.pics.addClass('state-one');
        s.screenone.removeClass('active');
        s.screenone.addClass('top');
        }, 1000));
      }

      if (src2) {
        $.data(this, 'timer', setTimeout(function() {
        s.screenthree.removeClass('bottom');
        s.screenthree.addClass('active');
        s.pics.addClass('state-two');
        s.screentwo.removeClass('active');
        s.pics.removeClass('state-one');
        s.screentwo.addClass('top');
        }, 200));
      }
    }

});


$(document).on('click touchstart', function () {
  $('#menu').removeClass('active');
  $('#nav').removeClass('displayed');
  $('#overlay').removeClass('displayed');
});

