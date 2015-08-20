// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

// jQuery stuff
jQuery(document).ready(function($) {

  // Switch section
  $('a', '.mainmenu').click(function() {
    if( ! $(this).hasClass('active') ) {
      $('a','.container-running').removeClass( 'active' );
      current_item = this;
      // close all visible divs with the class of .section
      $('.section:visible').fadeOut( section_hide_time, function() {
        $('a', '.mainmenu').removeClass( 'active' );
        $(current_item).addClass( 'active' );
        var new_section = $( $(current_item).attr('href') );
        new_section.fadeIn( section_show_time );
      } );
    }
    return false;
  });

  // Switch section
  $('a', '.container-running').click(function() {

    if( ! $(this).hasClass('active') ) {
      $('.dropdown').removeClass('open');
      $('a', '.mainmenu').removeClass( 'active' );
      current_item = this;
      // close all visible divs with the class of .section
      $('.section:visible').fadeOut( section_hide_time, function() {
        $('a','.container-running').removeClass( 'active' );
        $(current_item).addClass( 'active' );
        var new_section = $( $(current_item).attr('href') );
        new_section.fadeIn( section_show_time );
      } );
    }
    return false;
  });



  $('.content-runing').removeClass('running');

  $('.section:visible').fadeIn( section_hide_time, function() {
    $('.content-running').removeClass('running').delay(10).queue(function(next){
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
    $('.dropdown').removeClass('open');
  });

  // $('.content-runing').removeClass('running');
  //   $('.trigger-running').click(function() {
  //     $('.content-running').removeClass('running').delay(10).queue(function(next){
  //       $(this).addClass('running');
  //           next();
  //       });
  //       return false;
  //   });
});