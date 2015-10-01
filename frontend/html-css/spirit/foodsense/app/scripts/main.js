var s,
Takeit = {

  settings: {
    $body: $('body'),
    $slide: $('#slides')
  },

  init: function() {
    // kick things off
    s = this.settings;
  },


};


Takeit.init();
var slideOne = s.$slide.find('.slide-1'),
  slideTwo = s.$slide.find('.slide-2'),
  slideThree = s.$slide.find('.slide-3'),
  slideFour = s.$slide.find('.slide-4');

setInterval(function(){
  var slideActive = s.$slide.find('section.active');

  switch(true) {
    case slideActive.is(slideOne):
      slideOne.removeClass('active');
      slideTwo.addClass('active');
      break;
    case slideActive.is(slideTwo):
      slideTwo.removeClass('active');
      slideThree.addClass('active');
      break;
    case slideActive.is(slideThree):
      slideThree.removeClass('active');
      slideFour.addClass('active');
      break;
    case slideActive.is(slideFour):
      slideFour.removeClass('active');
      slideOne.addClass('active');
    break;
  }

},5000);