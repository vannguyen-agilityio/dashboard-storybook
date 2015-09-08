$(document).ready( function () {

  $('#menu').click( function () {
    console.log('click menu');


  if(!$(this).hasClass('active')) {
    // open menu
    $(this).addClass('active');
    if (!$('#nav').hasClass('displayed')) {
      // open menu
      $('#nav').addClass('displayed');
      $('#overlay').addClass('displayed');
    }

  } else {
    $(this).removeClass('active');
    $('#nav').removeClass('displayed');
    $('#overlay').removeClass('displayed');
  }
  return false;
  });


});


// reset animate when load page communication animation.scss
// var wow = new WOW(
//   {
//     boxClass:     'wowload',  // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       0,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true        // act on asynchronously loaded content (default is true)
//   }
// );
// wow.init();


$(document).ready (function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination',
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      mousewheelControl: true
    })
    mySwiper.on('slideChangeStart', function () {
      console.log('slide change start');
    });

  });