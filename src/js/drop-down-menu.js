(function ($) {
  $('.ic_open').click(function () {
    $('#drop-down-menu').fadeToggle('fast', function(){
      $('.ic_open').toggleClass('drop-menu-closed');
    });
  });
  $('body').click(function (e) {
    var $t = $(e.target);
    var trigger = false;
    
    if ($('#drop-down-menu').is(':visible')) {
      $($t.parents()).each(function (key, value) {

        if ($(value).hasClass('d-menu')) {
          trigger = true;
        }

      })
      if ($t.hasClass('ic_open') || $t.hasClass('d-menu') || trigger)
        return;

      $('#drop-down-menu').fadeOut('fast', function(){
         $('.ic_open').toggleClass('drop-menu-closed');
      });
    }
  });
})(jQuery)