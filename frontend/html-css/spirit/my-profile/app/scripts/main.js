// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

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
        var new_section = $( $(current_item).attr('href') );
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
        var new_section = $( $(current_item).attr('href') );
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
});