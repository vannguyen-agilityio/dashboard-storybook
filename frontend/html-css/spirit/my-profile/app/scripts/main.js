// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 2300;
var section_show_time = 2300;

// jQuery stuff
jQuery(document).ready(function($) {

  // Switch section on nav
  $('a', '.js-nav').click(function() {
    if( ! $(this).hasClass('active') ) {
      $('a','.js-running').removeClass( 'active' );
      current_item = this;
      // close all visible divs with the class of .section
      $('.js-section:visible').fadeOut( section_hide_time, function() {
        $('a', '.js-nav').removeClass( 'active' );
        $(current_item).addClass( 'active' );
        var attr_href = $(current_item).attr('href'),
            new_section = $(attr_href);
        if (attr_href == '#skills') {
          document.getElementById('skillbar-bar0').style.width="0px";
          document.getElementById('skillbar-bar1').style.width="0px";
          document.getElementById('skillbar-bar2').style.width="0px";
          $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
              width:$(this).attr('data-percent')
            },8000);
          });
        }
        new_section.fadeIn( section_show_time );
      } );
    }
    return false;
  });

  //Switch section on line
  $('a', '.js-running').click(function() {

    if( ! $(this).hasClass('active') ) {
      $('.js-dropdown').removeClass('open');
      $('a', '.js-nav').removeClass( 'active' );
      current_item = this;
      // close all visible divs with the class of .section
      $('.js-section:visible').fadeOut( section_hide_time, function() {
        $('a','.js-running').removeClass( 'active' );
        $(current_item).addClass( 'active' );
        var attr_href = $(current_item).attr('href'),
            new_section = $(attr_href);
        if (attr_href == '#skills') {
          document.getElementById('skillbar-bar0').style.width="0px";
          document.getElementById('skillbar-bar1').style.width="0px";
          document.getElementById('skillbar-bar2').style.width="0px";
          $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
              width:$(this).attr('data-percent')
            },8000);
          });
        }
        new_section.fadeIn( section_show_time );
      } );
    }
    return false;
  });


 //running line
  $('.content-runing').removeClass('running');

  $('.js-section:visible').fadeIn( section_hide_time, function() {
    $('.js-running').removeClass('running').delay(10).queue(function(next){
      $(this).addClass('running');
        next();
      });
  } );

  $('.js-navbar-toggle').click(function() {
  var menu = $(this).parent();
  if(!menu.hasClass('open')) {
    // open menu
    menu.toggleClass('open');
  } else {
    menu.removeClass('open');
  }
  return false;
  });

  $(document).on('click touchstart', function () {
    $('.js-dropdown').removeClass('open');
  });


  // reset animate when load page communication animation.scss
  var wow = new WOW(
    {
      boxClass:     'wowload',  // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true        // act on asynchronously loaded content (default is true)
    }
  );
  wow.init();



$(window).scroll(function() {
  if($(window).scrollTop() > 0) {
    $('.js-nav').addClass('hide');
  } else {
    $('.js-nav').removeClass('hide');
  }
});


  // $(window).scroll(function() {
  //   console.log('dfvndfvnd');
  // if ($(window).scrollTop() > 100) { $('#anything').slideDown(500); $('#anotherthing').fadeIn(1000);
  // }
  // if ($(window).scrollTop() < 100) { $('#anything').slideUp(500); $('#anotherthing').fadeOut(1000);
  // }
//  window.onload = function() {
//     //adding the event listerner for Mozilla
//     if(window.addEventListener)
//       document.addEventListener('DOMMouseScroll', moveObject, false);

//     //for IE/OPERA etc
//     console.log('111111111111', $(window).scrollTop() );
//     document.onmousewheel = moveObject;
// }
// function moveObject(event) {
//     var delta = 0;

//     if (!event) event = window.event;

//     // normalize the delta
//     if (event.wheelDelta) {

//         // IE and Opera
//         delta = event.wheelDelta / 60;

//     } else if (event.detail) {

//         // W3C
//         delta = -event.detail / 2;
//     }

//   console.log('dschjd', event);

// }
});