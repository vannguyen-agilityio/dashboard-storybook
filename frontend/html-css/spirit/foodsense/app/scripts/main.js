var s,
Foodsense = {

  settings: {
    $body: $('body'),
    $slide: $('#slides'),
    $navSlide: $('#nav-slide')
  },

  init: function() {
    // kick things off
    s = this.settings;
  },


};


Foodsense.init();
var slideOne = s.$slide.find('.slide-1'),
  slideTwo = s.$slide.find('.slide-2'),
  slideThree = s.$slide.find('.slide-3'),
  slideFour = s.$slide.find('.slide-4'),
  featureOne = s.$navSlide.find('.feature-1'),
  featureTwo = s.$navSlide.find('.feature-2'),
  featureThree = s.$navSlide.find('.feature-3'),
  featureFour = s.$navSlide.find('.feature-4');

setInterval(function(){
  var slideActive = s.$slide.find('section.active');

  switch(true) {
    case slideActive.is(slideOne):
      slideOne.removeClass('active');
      slideTwo.addClass('active');
      featureTwo.addClass('active');
      break;
    case slideActive.is(slideTwo):
      slideTwo.removeClass('active');
      slideThree.addClass('active');
      featureThree.addClass('active');
      break;
    case slideActive.is(slideThree):
      slideThree.removeClass('active');
      slideFour.addClass('active');
      featureFour.addClass('active');
      break;
    case slideActive.is(slideFour):
      slideFour.removeClass('active');
      slideOne.addClass('active');
      featureOne.addClass('active');
    break;
  }

},5000);